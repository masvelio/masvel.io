import { Heading } from "@chakra-ui/react";

import MainContainer from "../components/layout/MainContainer";
import SubscriptionBox from "../components/shared/SubscriptionBox";

const Subscribe = () => {
  return (
    <>
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
