import { GetStaticProps, GetStaticPaths } from "next";
import { NotionRenderer, BlockMapType } from "react-notion";
import { renderToString } from "react-dom/server";

import notion from "../../utils/notion.service";
import MainContainer from "../../components/layout/MainContainer";
import { Flex, Heading, Tag } from "@chakra-ui/react";
import { formatDate } from "../../utils/dates";

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
  };
};

const BlogPost: React.FC<{
  post: Post;
  blocks: BlockMapType;
  table: any[];
}> = ({ post, blocks, table }) => {
  const rawDate = table.find((el) => el.id === post.id)?.date;
  const displayDate = formatDate(rawDate);
  const htmlString = renderToString(<NotionRenderer blockMap={blocks} />);
  const asd = htmlString.replace(
    /class="notion-link"/gi,
    'class="notion-link" target="_blank" rel="noopener noreferrer"',
  );

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
          <div dangerouslySetInnerHTML={{ __html: asd }} />
          {/*<NotionRenderer blockMap={blocks} />*/}
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
