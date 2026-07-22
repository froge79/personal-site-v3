import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="site">
      <header className="site-header">
        <Link href="/" className="site-title">
          Samuel X
        </Link>
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
            href="https://letterboxd.com/"
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
          I&apos;m an agonistic and if you think you can convert me to
          Christianity, you&apos;re welcome to try.
        </p>
        <p>
          Sometimes I think about {""}
          <a
            href="https://en.wikipedia.org/wiki/Hard_problem_of_consciousness"
            className="link-consciousness"
            target="_blank"
            rel="noopener noreferrer"
          >
            consciousness
          </a>{""}, {""}
          <a
            href="https://en.wikipedia.org/wiki/Why_am_I_me"
            className="link-vertiginous-question"
            target="_blank"
            rel="noopener noreferrer"
          >the vertiginous question
          </a>{""}, {""}
          <a
            href="https://en.wikipedia.org/wiki/Death_anxiety"
            className="link-death"
            target="_blank"
            rel="noopener noreferrer"
          >
            death
          </a>{""}, and {""}
          <a
            href="https://en.wikipedia.org/wiki/Existential_nihilism"
            className="link-meaning-of-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            the meaning of life
          </a>.
        </p>
      </div>
    </div>
  );
}
