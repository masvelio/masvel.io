import { GetStaticProps } from "next";
import NextLink from "next/link";
import { Container, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

import notion from "../utils/notion.service";

import MainContainer from "../components/layout/MainContainer";

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
    <>
      <MainContainer>
        <Container maxW="4xl" p={0}>
          <Heading size="2xl" mb="4">
            Hi, this is Masvel
          </Heading>

          <Heading size="xl" mb="4">
            Check out my recent posts!
          </Heading>

          <UnorderedList>
            {posts.map((post) => (
              <ListItem key={post.slug}>
                <NextLink href={"/blog/[slug]"} as={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </NextLink>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      </MainContainer>
    </>
  );
};

export default HomePage;
