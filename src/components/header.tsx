import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "components/header.module.css";

export function Header({
  sitePath,
  name,
  headline,
}: {
  sitePath: string;
  name: string;
  headline: string;
}) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={headline} />
      </Head>

      <header className={styles.header}>
        <Link href="/[site]" as={`/${sitePath}`}>
          <a>
            <h1>{name}</h1>
          </a>
        </Link>
        <p>{headline}</p>
      </header>
    </>
  );
}
