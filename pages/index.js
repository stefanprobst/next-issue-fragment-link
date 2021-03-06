import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="#skip">
              <a>Skip to main w/ Link</a>
            </Link>
          </li>
          <li>
            <a href="#skip">Skip to main w/ native anchor</a>
          </li>
        </ul>
      </header>
      <main id="skip" tabIndex={-1}>
        <h1>Main</h1>
      </main>
    </div>
  );
}
