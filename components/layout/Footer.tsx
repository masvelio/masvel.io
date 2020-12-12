import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";

import { GithubIcon, MailIcon } from "../../utils/iconBuilder";

const Footer = () => (
  <Flex align="center" my={4} direction="column">
    <Box>
      <Link mx={1} href="mailto:me@masvel.io" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<MailIcon />}
          size="md"
          variant="ghost"
        />
      </Link>
      <Link mx={1} href="https://github.com/masvelio" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<GithubIcon />}
          size="md"
          variant="ghost"
        />
      </Link>
    </Box>
    <Box mt={4}>
      <Text fontSize="xs">{new Date().getFullYear()}</Text>
    </Box>
  </Flex>
);

export default Footer;
