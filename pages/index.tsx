import { GetStaticProps } from "next";
import NextLink from "next/link";
import {
  Heading,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";

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
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <MainContainer>
        <Flex flexDirection="column">
          <Heading mb={2} as="h1" size="2xl">
            Hi, this is Masvel
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>I’m a developer....</Text>
        </Flex>

        <Flex flexDirection="column" mt={8}>
          <Heading mb={4} size="xl">
            Most Popular Blog Posts
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
        </Flex>
      </MainContainer>
    </>
  );
};

export default HomePage;
