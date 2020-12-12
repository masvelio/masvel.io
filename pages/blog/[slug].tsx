import { GetStaticProps, GetStaticPaths } from "next";
import { NotionRenderer, BlockMapType } from "react-notion";

import notion from "../../utils/notion.service";
import MainContainer from "../../components/layout/MainContainer";
import { Flex, Heading } from "@chakra-ui/react";

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
    <MainContainer>
      <Flex flexDirection="column" mt={8}>
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          {post.title}
        </Heading>
      </Flex>

      <Flex flexDirection="column" mt={8} w="full">
        <NotionRenderer blockMap={blocks} />
      </Flex>
    </MainContainer>
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
