import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="site">
      <header className="site-header">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </header>

      <h1 className="page-title">About</h1>

      <div className="prose">
        <p>
          I love watching football. I support{" "}
          <a
            href="https://www.chelseafc.com/"
            className="link-chelsea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chelsea FC
          </a>{" "}
          and the{" "}
          <a
            href="https://www.englandfootball.com/"
            className="link-england"
            target="_blank"
            rel="noopener noreferrer"
          >
            England
          </a>{" "}
          national team, week in and week out. My favorite players are Estevao
          and Harry Kane.
        </p>
        <p>
          I enjoy watching films in my free time. You can find out more by
          visiting my{" "}
          <a
            href="https://letterboxd.com/froge159/"
            className="link-letterboxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Letterboxd
          </a>{" "}
          page. I occasionally binge a good TV show. My favorites are Breaking
          Bad and Shogun.
        </p>
        <p>
          I have a pretty random music taste, but I enjoy classical music and EDM, particularly techno, trance, and house. My favorite song right now:
        </p>
        <iframe
          src="https://open.spotify.com/embed/track/7fIfO8fZ55Eq5qtd5vCd6z?utm_source=generator&si=6df0d26a8fa64728"
          title="Spotify player"
          width="100%"
          height="152"
          style={{ borderRadius: 12, border: "none" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />

        <p>
          I like {" "}
          <a
            href="https://www.tacklewarehouse.com/"
            className="link-tacklewarehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            bass fishing
          </a>{" "} in my free time. Hopefully I&apos;ll get a bunch
          of nice gear after college apps.
        </p>
        <p>
          I&apos;m an agonistic. I lean towards Christianity.
        </p>
      </div>
    </div>
  );
}
