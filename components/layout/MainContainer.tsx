import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

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

const MainContainer = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StickyNav
        bg={navBgColor[colorMode]}
        as="nav"
        justify="center"
        p={6}
        mb={[0]}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth={["sm", "lg", "4xl"]}
          width="100%"
        >
          <Box minW="100px" w={["100px", "150px"]}>
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
      <Flex as="main" justifyContent="center" flexDirection="column" px={6}>
        {children}
        <Flex justify="center" mt="8">
          <Text>This is footer</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default MainContainer;
