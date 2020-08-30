import { Note } from "collected-notes";
import Link from "next/link";
import styles from "components/note-item.module.css"

export function NoteItem({ sitePath, note }: { sitePath: string; note: Note }) {
  return (
    <Link href="[...path]" as={`/${sitePath}/${note.path}`}>
      <a>
        <article className={styles.note}>
          <h2>{note.title}</h2>
          <p>{note.headline}</p>
        </article>
      </a>
    </Link>
  );
}
