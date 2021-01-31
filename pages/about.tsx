import { Heading, Text, Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MainContainer from "../components/layout/MainContainer";
import { TextLink } from "../components/shared/TextLink";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About me"
        description="I am full stack javascript developer and I am bootstrapping products with Jamstack in indie way."
      />
      <MainContainer>
        <Heading mt={[0, 6]} size="2xl" as="h1">
          About
        </Heading>

        <Box>
          <Text>
            Hi! My name is Marcin Maślanka, although starting up this blog I was
            convinced that I will use the nickname Masvel all the time. In one
            of the first posts about the brand you will be able to read the
            story related to it.
          </Text>
        </Box>
        <Heading>My job 👨‍💻</Heading>
        <Text>
          I work as Javascript Fullstack Developer with several years of
          experience in the industry. From the very beginning of my career I
          have been bound to this language and I am fascinated by the enormity
          of possibilities it has. Recently I&apos;m discovering{" "}
          <TextLink href={"https://nextjs.org/"} isExternal>
            Next.js
          </TextLink>{" "}
          and{" "}
          <TextLink href={"https://jamstack.org/what-is-jamstack/"} isExternal>
            Jamstack
          </TextLink>{" "}
          architecture. Apart from Javascript I like to explore in relational
          databases or play around in DevOps area, mainly with AWS. Besides
          programming, I&apos;m a big fan of{" "}
          <TextLink href={"https://www.notion.so/"} isExternal>
            Notion
          </TextLink>
          , so much so that this blog works with Notion as CMS.
        </Text>
        <Heading>My blog 📖</Heading>
        <Text>
          In the past, I have already run several blogs, but they were not in
          the field of technology.This time I would like to focus on describing
          topics that I am more interested in lately, so generally bootstraping
          products in{" "}
          <TextLink href={"https://www.indiehackers.com/"} isExternal>
            indie way
          </TextLink>
          . I will explore the problem of building startup / application /
          product / (you name it) starting from gathering knowledge about it,
          creating an idea, building it and shipping it. I am very curious what
          will come out of it, because at the moment I don&apos;t have a
          concrete plan for the next months. Bear with me to find out!
        </Text>
        <Heading>My life 🌍</Heading>
        <Text>
          I was born and raised in Poland. I graduated from economics
          university, but it wasn&apos;t something I wanted to do in life. So
          one day I started to learn programming, and the rest is history. In my
          free time I am a sports enthusiast. In winter I ride a snowboard, in
          summer I go on a wakeboard. Moreover, I like to play squash. I also
          share my passion for travelling with my wife. Together we made a
          nine-month trip around the world, which I documented day after day in
          the lens on{" "}
          <TextLink href={"https://tookapic.com/bbwanders"} isExternal>
            Tookapic
          </TextLink>
          .
        </Text>
        <Heading>My mail 📬</Heading>
        <Text>
          Do not hesitate to contact me about anything. I will be happy to
          answer you. Just use my email address from the footer below. See you
          later!
        </Text>
      </MainContainer>
    </>
  );
};

export default AboutPage;
