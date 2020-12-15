import NextLink from "next/link";
import { Badge, Box, Heading, Tag, Text, useColorMode } from "@chakra-ui/react";

import { formatDate } from "../../utils/dates";
import { Post } from "../../types/Post";

const DAYS_3 = 259200000;

const PostsList = ({ posts, limit }: { posts: Post[]; limit?: number }) => {
  const { colorMode } = useColorMode();
  const boxShadows = colorMode === "light" ? ["lg", "md"] : ["mdLight"];

  return (
    <>
      {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
        .map(({ slug, date, title, intro }) => (
          <NextLink key={slug} href={`blog/${slug}`}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p="6"
              w="full"
              boxShadow={boxShadows}
              _hover={{
                cursor: "pointer",
                boxShadow: colorMode === "light" ? "lg" : "lgLight",
                transition: "0.2s",
              }}
            >
              <Heading as="h3" size="lg">
                {title}
                {Date.now() - new Date(date).getTime() <= DAYS_3 && (
                  <Badge ml="2" fontSize="md" colorScheme="green">
                    New
                  </Badge>
                )}
              </Heading>
              <Tag mt={2}>{formatDate(date)}</Tag>
              <Text mt={4} noOfLines={[8, 4]}>
                {intro}
              </Text>
            </Box>
          </NextLink>
        ))}
    </>
  );
};

export default PostsList;
