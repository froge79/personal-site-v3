"use client";

import { useEffect, useRef } from "react";

const PITCH = 10; // grid spacing in CSS pixels
const DOT = 6; // drawn size of a live cell
const DOT_RADIUS = 1.5;
const GENERATION_MS = 1000;
const FADE_MS = 500;
const SEED_DENSITY = 0.28;
const CELL_COLOR = "rgb(122, 168, 214)";
const MAX_ALPHA = 0.55;
const STALE_LIMIT = 3; // stagnant generations tolerated before a nudge

export function GameOfLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const roundRect = typeof ctx.roundRect === "function";

    let cols = 0;
    let rows = 0;
    let cells = new Uint8Array(0);
    let scratch = new Uint8Array(0);
    let alpha = new Float32Array(0);
    let originX = 0;
    let originY = 0;
    let width = 0;
    let height = 0;

    let recentHashes: number[] = [];
    let stale = 0;

    let frame = 0;
    let lastFrame = 0;
    let sinceGeneration = 0;
    let onScreen = true;

    const seed = () => {
      for (let i = 0; i < cells.length; i++) {
        cells[i] = Math.random() < SEED_DENSITY ? 1 : 0;
      }
      recentHashes = [];
      stale = 0;
    };

    // Drop a loose cluster of live cells somewhere in the grid, so a board that
    // has settled into still lifes starts breathing again.
    const sprinkle = () => {
      const cx = Math.floor(Math.random() * cols);
      const cy = Math.floor(Math.random() * rows);
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          if (Math.random() > 0.45) continue;
          const x = (cx + dx + cols) % cols;
          const y = (cy + dy + rows) % rows;
          cells[y * cols + x] = 1;
        }
      }
      stale = 0;
      recentHashes = [];
    };

    const step = () => {
      let population = 0;

      for (let y = 0; y < rows; y++) {
        const up = ((y - 1 + rows) % rows) * cols;
        const mid = y * cols;
        const down = ((y + 1) % rows) * cols;

        for (let x = 0; x < cols; x++) {
          const left = (x - 1 + cols) % cols;
          const right = (x + 1) % cols;

          const neighbours =
            cells[up + left] +
            cells[up + x] +
            cells[up + right] +
            cells[mid + left] +
            cells[mid + right] +
            cells[down + left] +
            cells[down + x] +
            cells[down + right];

          const alive = cells[mid + x];
          const born = neighbours === 3 || (alive === 1 && neighbours === 2);
          scratch[mid + x] = born ? 1 : 0;
          population += born ? 1 : 0;
        }
      }

      const swap = cells;
      cells = scratch;
      scratch = swap;

      if (population === 0) {
        seed();
        return;
      }

      // FNV-1a over the board: repeats mean we've locked into a still life or a
      // short-period oscillator.
      let hash = 0x811c9dc5;
      for (let i = 0; i < cells.length; i++) {
        hash = ((hash ^ cells[i]) * 0x01000193) >>> 0;
      }

      stale = recentHashes.includes(hash) ? stale + 1 : 0;
      recentHashes.push(hash);
      if (recentHashes.length > 3) recentHashes.shift();

      if (stale >= STALE_LIMIT) sprinkle();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = CELL_COLOR;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const a = alpha[y * cols + x];
          if (a <= 0.004) continue;

          // smoothstep, so cells ease in and out rather than ramping linearly
          ctx.globalAlpha = a * a * (3 - 2 * a) * MAX_ALPHA;

          const px = originX + x * PITCH;
          const py = originY + y * PITCH;

          if (roundRect) {
            ctx.beginPath();
            ctx.roundRect(px, py, DOT, DOT, DOT_RADIUS);
            ctx.fill();
          } else {
            ctx.fillRect(px, py, DOT, DOT);
          }
        }
      }

      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const delta = Math.min(now - lastFrame, 100);
      lastFrame = now;

      sinceGeneration += delta;
      let stepped = false;
      if (sinceGeneration >= GENERATION_MS) {
        sinceGeneration %= GENERATION_MS;
        step();
        stepped = true;
      }

      const shift = delta / FADE_MS;
      let settled = true;
      for (let i = 0; i < cells.length; i++) {
        const target = cells[i];
        const current = alpha[i];
        if (current === target) continue;

        settled = false;
        alpha[i] =
          target === 1
            ? Math.min(current + shift, 1)
            : Math.max(current - shift, 0);
      }

      if (!settled || stepped) draw();

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      lastFrame = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const sync = () => {
      if (onScreen && !document.hidden && !reduceMotion) start();
      else stop();
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nextCols = Math.max(1, Math.floor(width / PITCH));
      const nextRows = Math.max(1, Math.floor(height / PITCH));
      originX = (width - nextCols * PITCH + PITCH - DOT) / 2;
      originY = (height - nextRows * PITCH + PITCH - DOT) / 2;

      if (nextCols !== cols || nextRows !== rows) {
        cols = nextCols;
        rows = nextRows;
        cells = new Uint8Array(cols * rows);
        scratch = new Uint8Array(cols * rows);
        alpha = new Float32Array(cols * rows);
        seed();
        if (reduceMotion) alpha.set(cells);
      }

      draw();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const visibility = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { rootMargin: "100px" },
    );
    visibility.observe(container);

    document.addEventListener("visibilitychange", sync);

    resize();
    sync();

    return () => {
      stop();
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div ref={containerRef} className="life-panel" aria-hidden="true">
      <canvas ref={canvasRef} className="life-canvas" />
    </div>
  );
}
