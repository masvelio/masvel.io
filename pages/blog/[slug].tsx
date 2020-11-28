import { GetStaticProps, GetStaticPaths } from "next";
import { NotionRenderer, BlockMapType } from "react-notion";

import notion from "../../utils/notion.service";

export type Post = { id: string; slug: string; title: string };

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const table = await notion.getTable();
  const post = table.find((post) => post.slug === slug);
  const blocks = await notion.getPage(post.id);

  return {
    props: {
      post,
      blocks,
    },
  };
};

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({
  post,
  blocks,
}) => (
  <>
    <h1>{post.title}</h1>
    <NotionRenderer blockMap={blocks} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const table = await notion.getTable();
  const paths = table.map((row) => ({ params: { slug: row.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
