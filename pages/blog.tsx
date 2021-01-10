import { Heading, Text, Box } from "@chakra-ui/react";
import MainContainer from "../components/layout/MainContainer";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import notion from "../utils/notion.service";
import PostsList from "../components/shared/PostsList";
import { Post } from "../types/Post";

export const getStaticProps: GetStaticProps = async () => {
  const table = await notion.getTable();

  return {
    props: {
      posts: table,
    },
    revalidate: 10,
  };
};

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="I share my thoughts about ideas on products, about building JAM Stack applications and about shipping them in indie way."
      />
      <MainContainer>
        <Heading mt={[0, 6]} size="2xl" as="h1">
          Blog
        </Heading>

        <Box>
          <Text>
            Welcome to my blog. Here you can find the list of the all posts I
            have written since the very beginning. I write about the whole
            process of bootstrapping products in indie way as a maker with JAM
            Stack architecture.
          </Text>
        </Box>
        <Heading>All Posts</Heading>
        <PostsList posts={posts} />
      </MainContainer>
    </>
  );
};

export default BlogPage;
