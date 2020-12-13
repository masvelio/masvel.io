import { Link, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  font-weight: bold;
`;

const TextLink = (props) => {
  const bg = useColorModeValue("purple.100", "purple.700");

  return (
    <StyledLink {...props} bg={bg} px={1}>
      {props.children}
    </StyledLink>
  );
};

export { TextLink };
