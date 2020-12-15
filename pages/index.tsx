import { GetStaticProps } from "next";
import { Heading, Flex, Text, AspectRatio, Box } from "@chakra-ui/react";

import notion from "../utils/notion.service";
import MainContainer from "../components/layout/MainContainer";
import BackgroundBlob from "../components/layout/BackgroundBlob";
import PostsList from "../components/shared/PostsList";
import { Post } from "../types/Post";

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
        <Heading size="xl">Recent Blog Posts</Heading>

        <PostsList posts={posts} limit={2} />
      </MainContainer>
    </>
  );
};

export default HomePage;
