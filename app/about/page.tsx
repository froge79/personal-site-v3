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
          I support{" "}
          <a
            href="https://youtu.be/W_AwYFTSQZ8?t=10"
            className="link-chelsea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chelsea FC
          </a>{" "}
          and the{" "}
          <a
            href="https://youtu.be/Kisz0J2fvyQ?t=102"
            className="link-england"
            target="_blank"
            rel="noopener noreferrer"
          >
            England
          </a>{" "}
          national team. My favorite players are Estevao
          and Harry Kane.
        </p>
        <p>
          I enjoy watching and commenting on{" "}
          <a
            href="https://letterboxd.com/froge79"
            className="link-letterboxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            films
          </a>{" "}in my free time. I occasionally binge a good TV show &#40;Breaking
          Bad, Succession, Shogun&#41;.
        </p>
        <p>
          I like classical music and dance music &#40;pls don&apos;t call it edm or rave music&#41;, particularly techno and house. I listen to big-room/festival tracks and underground/club tracks. Currently playing:
        </p>
        <iframe
          src="https://open.spotify.com/track/21jO16ka3N4a65b14e7taN?si=21505c23f9e24ca3"
          title="Spotify player"
          width="100%"
          height="152"
          style={{ borderRadius: 12, border: "none" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />

        <p>
          I also love bass fishing and
          {" "}
          <a
            href="https://www.tacklewarehouse.com/"
            className="link-tacklewarehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            tackle
          </a>.
        </p>
        <p>
          I&apos;m an agonistic. I lean towards Christianity.
        </p>
      </div>
    </div>
  );
}
