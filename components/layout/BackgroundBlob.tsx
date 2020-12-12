import styled from "@emotion/styled";
import { Box } from "@chakra-ui/layout";
import { useToken } from "@chakra-ui/react";

const StyledBox = styled(Box)`
  position: absolute;
  z-index: -100;
  width: 100%;
  opacity: ${({ colorMode }) => (colorMode === "dark" ? "0.8" : "0.4")};
  top: 0;
  left: 0;
  right: 0;

  .gradient-start {
    stop-color: ${({ colors }) => colors[0]};
  }

  .gradient-stop {
    stop-color: ${({ colors }) => colors[1]};
  }
`;

const BackgroundBlob = () => {
  const colors = useToken("colors", ["pink.500", "blue.500"]);

  return (
    <StyledBox colors={colors}>
      <svg viewBox="-150 -125 280 200">
        <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
          <stop className="gradient-start" offset="0" />
          <stop className="gradient-stop" offset="100%" />
        </linearGradient>
        <path
          fill="url(#gradient)"
          d="M40,-44.1C49.2,-40,52.2,-24.9,54.5,-9.9C56.7,5,58.3,19.8,50.9,26.4C43.6,33,27.2,31.5,15.6,30.3C4,29.1,-3,28.1,-12.5,27.6C-22.1,27.1,-34.2,26.9,-44.3,20.3C-54.4,13.7,-62.5,0.6,-65,-16C-67.5,-32.7,-64.4,-52.9,-52.7,-56.5C-40.9,-60.1,-20.5,-47.1,-2.5,-44.1C15.4,-41.1,30.8,-48.1,40,-44.1Z"
          transform="scale(2)"
        />
      </svg>
    </StyledBox>
  );
};
export default BackgroundBlob;
