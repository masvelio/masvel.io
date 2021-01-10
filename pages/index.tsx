import { GetStaticProps } from "next";
import { Heading, Flex, Text, AspectRatio, Box } from "@chakra-ui/react";

import notion from "../utils/notion.service";
import MainContainer from "../components/layout/MainContainer";
import BackgroundBlob from "../components/layout/BackgroundBlob";
import PostsList from "../components/shared/PostsList";
import { Post } from "../types/Post";
import { TextLink } from "../components/shared/TextLink";
import SubscriptionBox from "../components/shared/SubscriptionBox";

export const getStaticProps: GetStaticProps = async () => {
  const table = await notion.getTable();

  return {
    props: {
      posts: table,
    },
    revalidate: 10,
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
              <Heading mb={2} as="p" fontSize={["8vw", "8vw", "6xl"]}>
                Hi, this is Masvel
              </Heading>
              <Text as="p" fontSize={["5vw", "5vw", "4xl"]}>
                I&apos;M BUILDING STUFF
              </Text>
            </Flex>
          </Box>
        </AspectRatio>

        <Heading as="p" size="xl">
          Welcome
        </Heading>
        <Text>
          I am Masvel and you are here probably as you want to know how to{" "}
          <Text as={"h1"} style={{ display: "inline" }}>
            build and ship products using JAM Stack architecture
          </Text>
          . I write about the whole{" "}
          <Text as={"h2"} style={{ display: "inline" }}>
            bootstrapping process beginning from the idea, through development,
            ending with the shipment of the project, handled in indie way as a
            maker
          </Text>
          . Make yourself comfortable here. Find more information{" "}
          <TextLink href={"/about"}>about me</TextLink> or check the{" "}
          <TextLink href={"/blog"}>latest posts</TextLink> about JAM Stack,
          bootstrapping and other topics.
        </Text>

        <Heading size="xl" as={"p"}>
          Recent Blog Posts
        </Heading>
        <PostsList posts={posts} limit={2} />

        <Heading size="xl" as={"p"}>
          Subscribe
        </Heading>
        <SubscriptionBox isBlogPost={false} />
      </MainContainer>
    </>
  );
};

export default HomePage;
