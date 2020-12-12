import { GetStaticProps } from "next";
import NextLink from "next/link";
import {
  Heading,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  AspectRatio,
  Box,
} from "@chakra-ui/react";

import notion from "../utils/notion.service";
import MainContainer from "../components/layout/MainContainer";
import BackgroundBlob from "../components/layout/BackgroundBlob";

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
        <AspectRatio w="full" ratio={672 / 480}>
          <Box>
            <BackgroundBlob />
            <Flex align="center" flexDirection="column">
              <Heading mb={2} as="h1" fontSize={["8vw", "8vw", "6xl"]}>
                Hi, this is Masvel
              </Heading>
              <Text as="h2" fontSize={["5vw", "5vw", "4xl"]}>
                I&apos;M BUILDING STUFF
              </Text>
            </Flex>
          </Box>
        </AspectRatio>

        <Flex flexDirection="column" mt={4} w="full">
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
