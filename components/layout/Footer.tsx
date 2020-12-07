import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";

import { GithubIcon, MailIcon } from "../../utils/iconBuilder";

const Footer = () => (
  <Flex align="center" mt={4} direction="column">
    <Box>
      <Link href="mailto:me@masvel.io" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<MailIcon />}
          size="md"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/masvelio" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<GithubIcon />}
          size="md"
          variant="ghost"
        />
      </Link>
    </Box>
    <Box>
      <Text fontSize="xs">{new Date().getFullYear()}</Text>
    </Box>
  </Flex>
);

export default Footer;
