import { Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MainContainer from "../components/layout/MainContainer";
import SubscriptionBox from "../components/shared/SubscriptionBox";

const Subscribe = () => {
  return (
    <>
      <NextSeo
        title="Subscribe"
        description="Enroll to my newsletter to get fresh updates on new ideas, products and other things related to bootstrapping products in indie way with JAM stack."
      />
      <MainContainer>
        <Heading mt={[0, 6]} size="2xl" as="h1">
          Subscribe
        </Heading>

        <SubscriptionBox isBlogPost={false} />
      </MainContainer>
    </>
  );
};

export default Subscribe;
