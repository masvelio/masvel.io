import { GetStaticProps } from "next";
import Link from "next/link";
import { useColorMode, Button } from "@chakra-ui/react";

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
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <h1>Welcome to my blog</h1>
      <h2>These are my recent posts:</h2>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
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
