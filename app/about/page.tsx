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
            href="https://letterboxd.com/froge79"
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
          I like classical music and EDM, particularly techno, house/tech-house, and a bit of trance. My favorite DJs are Armin van Buuren and Adam Beyer. Favorite song right now:
        </p>
        <iframe
          src="https://open.spotify.com/embed/track/0O5J5xw0Geb9csWY6rg3uj?utm_source=generator&si=be7b162068c44c24"
          title="Spotify player"
          width="100%"
          height="152"
          style={{ borderRadius: 12, border: "none" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />

        <p>
          I also love bass fishing. I&apos;m really into
          {" "}
          <a
            href="https://www.tacklewarehouse.com/"
            className="link-tacklewarehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            tackle and fishing gear
          </a>{""}
          , and I&apos;m hoping to start a YouTube channel after college apps.
        </p>
        <p>
          I&apos;m an agonistic. I lean towards Christianity.
        </p>
      </div>
    </div>
  );
}
