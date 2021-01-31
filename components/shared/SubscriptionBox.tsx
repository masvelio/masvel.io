import { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Flex,
  Tooltip,
  useColorMode,
  Heading,
  useToken,
  useToast,
  Theme,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

const toasterOptions = { isClosable: true };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledFlex = styled(({ isColorMode, ...rest }) => <Flex {...rest} />)`
  ${({ isColorMode, theme }: { isColorMode: boolean; theme: Theme }) =>
    isColorMode
      ? css`
          border: 10px solid;
          border-image-slice: 1;
          border-width: 5px;
          border-image-source: linear-gradient(
            to left,
            ${theme.colors.blue["500"]},
            ${theme.colors.pink["500"]}
          );
        `
      : css`
          border-width: 1px;
          border-radius: 0.5rem;
        `}
`;

const SubscriptionBox = ({ isColorMode = true, isBlogPost = true }) => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [mdShadow] = useToken("shadows", ["md"]);

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const subscribeNewsletter = async () => {
    setLoading(true);

    try {
      await axios.post(
        "/api/subscribe",
        { email, name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      toast({
        ...toasterOptions,
        title: "I've got your request 💪",
        description: "Please check your inbox.",
        status: "success",
      });

      setName("");
      setEmail("");
    } catch (err) {
      const {
        title = "Oops",
        details = "Something went wrong. Send me an email please and I will get back to you.",
      } = err?.response?.data;
      toast({
        ...toasterOptions,
        title,
        description: details,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFlex
      isColorMode={isColorMode}
      w={["full"]}
      p={[3, 5]}
      boxShadow={colorMode === "dark" ? "lgLight" : "md"}
      flexDirection="column"
    >
      {isBlogPost && <Heading mb={4}>Hey, did you like the post?</Heading>}
      <FormLabel>
        Join the list and get periodic updates about bootstrapping products with
        Jamstack architecture articles, upcoming projects handled in indie way
        as a maker and other interesting things. This also will help me to keep
        improving the content 🙏
      </FormLabel>
      <Flex direction={["column", "column", "row"]}>
        <Box minW="" mx="2" my="2">
          <Input
            w="full"
            id="name"
            type="text"
            placeholder="Adam"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Box>
        <Box minW="40%" mx="2" my="2">
          <Input
            w="full"
            id="email"
            type="email"
            placeholder="adam@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Box>
        <Tooltip
          isDisabled={Boolean(name && email)}
          placement="top"
          label="Name and Email are required"
        >
          <Box minW="30%" mx="2" my="2" flex="1">
            <Button
              isLoading={isLoading}
              disabled={!name || !email}
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
        </Tooltip>
      </Flex>
    </StyledFlex>
  );
};

export default SubscriptionBox;
