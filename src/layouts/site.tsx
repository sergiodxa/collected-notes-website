import * as React from "react";
import { SitePageProps } from "types";
import { Header } from "components/header";
import styles from "layouts/site.module.css";
import { NoteItem } from "components/note-item";

export function SiteLayout({ site, notes }: SitePageProps) {
  return (
    <>
      <Header
        sitePath={site.site_path}
        name={site.name}
        headline={site.headline}
      />

      <section className={styles.section}>
        {notes.map((note) => (
          <NoteItem key={note.id} sitePath={site.site_path} note={note} />
        ))}
      </section>
    </>
  );
}
