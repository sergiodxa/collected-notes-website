import { GetStaticProps, GetStaticPaths } from "next";
import { site as readSite } from "collected-notes";
import { SitePageProps, SitePageQuery } from "types";
import { SiteLayout } from "layouts/site";

export const getStaticProps: GetStaticProps<
  SitePageProps,
  SitePageQuery
> = async ({ params }) => {
  const { site, notes } = await readSite(params.site, 1);

  // fetch all pages
  if (notes.length < site.total_notes) {
    for await (let page of Array.from(
      { length: Math.ceil(site.total_notes / 40) },
      (_, index) => index + 1
    )) {
      if (page === 1) continue;
      const res = await readSite(params.site, page);
      notes.push(...res.notes);
    }
  }

  return { props: { site, notes }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths<SitePageQuery> = async () => {
  return { paths: [], fallback: "unstable_blocking" };
};

export default SiteLayout;
