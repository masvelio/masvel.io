import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 100;
  top: 0;
  opacity: 0.9;
  backdrop-filter: blur(3px);
  transition: 0.1s ease-in-out;
`;

const StyledBox = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

const navBgColor = {
  light: "rgba(255, 255, 255, .9)",
  dark: "rgba(16, 8, 24, .6)",
};

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="4xl"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      p={[6, 8]}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <Flex justify="space-between" alignItems="center" w="100%">
        <StyledBox minW={24} w={[24, 40]}>
          <Link href={"/"}>
            <Image
              src={
                colorMode === "dark"
                  ? "/images/logo-masvel-light.svg"
                  : "/images/logo-masvel.svg"
              }
            />
          </Link>
        </StyledBox>
        <Flex>
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
  );
};

export default Navigation;