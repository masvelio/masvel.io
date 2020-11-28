import { GetStaticProps } from "next";
import Link from "next/link";

import notion from "../utils/notion.service";

export type Post = { id: string; slug: string; title: string };

export const getStaticProps: GetStaticProps = async () => {
  const table = await notion.getTable();

  return {
    props: {
      posts: table,
    },
  };
};

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <h2>These are my recent posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={"/blog/[slug]"} as={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
