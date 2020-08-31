import { GetStaticProps, GetStaticPaths } from "next";
import { site as readSite, body as readBody } from "collected-notes";
import { NotePageProps, NotePageQuery } from "types";
import { NoteLayout } from "layouts/note";

export const getStaticProps: GetStaticProps<
  NotePageProps,
  NotePageQuery
> = async ({ params }) => {
  const [{ site }, { note, body }] = await Promise.all([
    readSite(params.site, 1),
    readBody(params.site, params.note.join("/")),
  ]);
  return { props: { note, site, body }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths<NotePageQuery> = async () => {
  return { paths: [], fallback: "unstable_blocking" };
};

export default NoteLayout;
