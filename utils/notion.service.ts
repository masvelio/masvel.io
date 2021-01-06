import { NOTION_WORKER_URL, NOTION_BLOG_ID, VERCEL_ENV } from "./config";

const getPage = async (id: string) => {
  try {
    const response = await fetch(`${NOTION_WORKER_URL}/page/${id}`);
    const page = await response.json();

    // API does not return http error for bad route
    if (page.error) {
      throw new page.error();
    }

    return page;
  } catch (err) {
    console.error("Error while fetching Notion page:", err);
  }
};

const getTable = async () => {
  try {
    const response = await fetch(
      `${NOTION_WORKER_URL}/table/${NOTION_BLOG_ID}`,
    );
    const allPosts = await response.json();
    // local & prod are checkboxes in notion
    const table = allPosts.filter((post) =>
      VERCEL_ENV ? post.local && post.prod : post.local,
    );

    // API does not return http error for bad route
    if (table.error) {
      throw new table.error();
    }

    return table;
  } catch (err) {
    // let the build fail
    console.error("Error while fetching Notion table:", err);
  }
};

export default {
  getPage,
  getTable,
};
