import notion from "../utils/notion.service";

const toUrl = (host, route) => `<url><loc>https://${host}${route}</loc></url>`;

const createSitemap = (
  host,
  routes,
  posts,
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => toUrl(host, route)).join("")}
    ${posts.map((post) => toUrl(host, `/blog/${post}`)).join("")}
    </urlset>`;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res, req }) => {
  // manually add new pages
  const routes = ["", "/blog", "/about"];
  const table = await notion.getTable();
  const posts = table.map((el) => el.slug);
  const sitemap = createSitemap(req.headers.host, routes, posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return res;
};

export default Sitemap;
