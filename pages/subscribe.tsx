import {
  Heading,
  Box,
  Button,
  FormLabel,
  Input,
  Flex,
  useColorMode,
  useToken,
} from "@chakra-ui/react";

import MainContainer from "../components/layout/MainContainer";

const Subscribe = () => {
  const { colorMode } = useColorMode();

  const [mdShadow] = useToken("shadows", ["md"]);

  const subscribeNewsletter = async () => {
    console.log("subscribe");
    // const data = {
    //   email: `maslankam92+${Math.round(Math.random() * 20)}@gmail.com`,
    //   name: "Marcin",
    // };
    //
    // const res = await fetch("/api/subscribe", {
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // });
    // console.log("res", res);
  };

  return (
    <>
      <MainContainer>
        <Heading mt={[0, 6]} size="2xl" as="h1">
          Subscribe
        </Heading>

        <Flex
          w={["full"]}
          p={[3, 5]}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow={colorMode === "dark" ? "lgLight" : "md"}
          flexDirection="column"
        >
          <FormLabel htmlFor="email">
            Be the first to know when I post something new! Candid thoughts
            about React.js, Node.js, startups and other interesting things.
          </FormLabel>
          <Flex direction={["column", "column", "row"]}>
            <Box minW="60%" mx="2" my="2">
              <Input
                w="full"
                id="email"
                type="email"
                placeholder="nick@mail.com"
              />
            </Box>
            <Box mx="2" my="2" flex="1">
              <Button
                onClick={subscribeNewsletter}
                w="full"
                color={colorMode === "light" ? "white" : "purple.1000"}
                background={colorMode === "dark" ? "white" : "purple.1000"}
                boxShadow={colorMode === "dark" ? "light-lg" : "dark-lg"}
                _hover={{
                  boxShadow: `${mdShadow}`,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Flex>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Subscribe;
