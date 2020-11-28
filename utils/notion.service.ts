import { API_URL, NOTION_BLOG_ID } from "./config";

const getPage = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/page/${id}`);
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
    const response = await fetch(`${API_URL}/table/${NOTION_BLOG_ID}`);
    const table = await response.json();

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
