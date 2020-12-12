import { Flex, Stack } from "@chakra-ui/react";

import Navigation from "./Navigation";
import Footer from "./Footer";

const MainContainer = ({ children }) => (
  <>
    <Navigation />

    <Flex as="main" justifyContent="center" flexDirection="column" px={6}>
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m={[0, "0 auto"]}
        maxW={["full", "2xl"]}
        w="full"
      >
        {children}
      </Stack>

      <Footer />
    </Flex>
  </>
);
export default MainContainer;
