import { Heading, Box, Button } from "@chakra-ui/react";

import MainContainer from "../components/layout/MainContainer";

const Subscribe = () => {
  const subscribeNewsletter = async () => {
    console.log("subscribe");
    const data = {
      email: `maslankam92+${Math.round(Math.random() * 20)}@gmail.com`,
      name: "Marcin",
    };

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log("res", res);
  };

  return (
    <>
      <MainContainer>
        <Heading mt={[0, 6]} size="2xl" as="h1">
          Subscribe
        </Heading>

        <Box>
          <Button onClick={subscribeNewsletter}>Subscribe</Button>
        </Box>
      </MainContainer>
    </>
  );
};

export default Subscribe;
