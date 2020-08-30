import { Note, Site } from "collected-notes";

export type NotePageProps = { note: Note; site: Site };

export type NotePageQuery = { note: string[]; site: string };

export type SitePageProps = { site: Site; notes: Note[] };

export type SitePageQuery = { site: string };

export type SearchPageProps = { site: Site };
