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
  Image,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import notion from "../utils/notion.service";
// import logo from "../assets/images/logo-masvel.svg" ;

export type Post = { id: string; slug: string; title: string };

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 100;
  top: 0;
  backdrop-filter: blur(3px);
  opacity: 0.9;
`;

const navBgColor = {
  light: "rgba(255, 255, 255, 0.9)",
  dark: "rgba(26, 32, 44, 1)",
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
        bg={navBgColor[colorMode]}
        as="nav"
        justify="center"
        p={6}
        mt={[0, 8]}
        mb={8}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth={["sm", "lg", "4xl"]}
          width="100%"
        >
          <Box w={["100px", "150px"]}>
            <Image
              src={
                colorMode === "dark"
                  ? "/images/logo-masvel-light.svg"
                  : "/images/logo-masvel.svg"
              }
            />
          </Box>
          <Flex>
            <Box mr={2}>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p={[1, 4]}>
                  Blog
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
