import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { formatDistanceToNow } from "date-fns";
import { NotePageProps } from "types";
import { Header } from "components/header";
import styles from "layouts/note.module.css";

export function NoteLayout({ note, site, body }: NotePageProps) {
  return (
    <>
      <Header
        sitePath={site.site_path}
        name={site.name}
        headline={site.headline}
      />

      <article
        className={clsx(styles.article, "prose prose-lg dark:prose-dark")}
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <footer className={styles.footer}>
        <time dateTime={note.created_at}>
          {formatDistanceToNow(new Date(note.created_at), { addSuffix: true })}
        </time>

        <p>
          <NextLink href="/">
            <a>{site.name}</a>
          </NextLink>
        </p>
      </footer>
    </>
  );
}
