import { GetStaticProps } from "next";
import NextLink from "next/link";
import {
  useColorMode,
  Button,
  Box,
  Flex,
  IconButton,
  Container,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import notion from "../utils/notion.service";

export type Post = { id: string; slug: string; title: string };

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1s ease-in-out;
`;

const navBgColor = {
  light: "rgba(255, 255, 255, 0.8)",
  dark: "rgba(23, 25, 35, 0.8)",
};

export const getStaticProps: GetStaticProps = async () => {
  const table = await notion.getTable();

  return {
    props: {
      posts: table,
    },
  };
};

const HomePage = ({ posts }: { posts: Post[] }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Box as="span">LOGO</Box>
        <Flex>
          <Box mr={2}>
            <NextLink href="/blog" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                Blog
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                About
              </Button>
            </NextLink>
          </Box>
          <Box>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </Flex>
      </StickyNav>

      <Container>
        <Heading size="2xl" mb="4">
          Welcome to my blog
        </Heading>
        <Heading size="xl" mb="4">
          These are my recent posts:
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
    </>
  );
};

export default HomePage;
