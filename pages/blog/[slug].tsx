import { GetStaticProps, GetStaticPaths } from "next";
import { NotionRenderer, BlockMapType } from "react-notion";
import { Flex, Heading, Tag } from "@chakra-ui/react";

import notion from "../../utils/notion.service";
import MainContainer from "../../components/layout/MainContainer";
import { formatDate } from "../../utils/dates";
import SubscriptionBox from "../../components/shared/SubscriptionBox";

export type Post = { id: string; slug: string; title: string };

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const table = await notion.getTable();
  const post = table.find((post) => post.slug === slug);
  const blocks = await notion.getPage(post.id);

  return {
    props: {
      post,
      blocks,
      table,
    },
    revalidate: 10,
  };
};

const BlogPost: React.FC<{
  post: Post;
  blocks: BlockMapType;
  table: any[];
}> = ({ post, blocks, table }) => {
  const rawDate = table.find((el) => el.id === post.id)?.date;
  const displayDate = formatDate(rawDate);

  return (
    <>
      <MainContainer>
        <Flex flexDirection="column" mt={8}>
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {post.title}
          </Heading>
        </Flex>
        <Tag mt={2} w="auto">
          {displayDate}
        </Tag>
        <Flex flexDirection="column" mt={8} w="full">
          <NotionRenderer blockMap={blocks} />
        </Flex>
        <Flex mb={16}>
          <SubscriptionBox />
        </Flex>
      </MainContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const table = await notion.getTable();
  const paths = table.map((row) => ({ params: { slug: row.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
