import { Text, useColorModeValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-item: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  transform: scale(0.95, 0.95);

  &:hover img {
    animation: chewy 1s infinite;
  }

  @keyframes chewy {
    15%, 40%, 75%, 100% {
        transform-origin: center center;
    }
    15% {
        transform: scale(1, 1) rotate(5deg);
    }
    40% {
        transform: scale(0.75, 0.75) rotate(10deg);
    }
    75% {
      transform: scale(1, 1) rotate(5deg);
    }
    100% {
        transform: scale(1, 1) rotate(0deg);
    }
  }
`

const Logo = () => {
  return (
    <LogoBox>
      <Image
        src={useColorModeValue("/personal-website/appleDark.png", "/personal-website/apple.png")}
        layout='fixed'
        boxSize="25px"
        alt="logo"
      ></Image>
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily="M PLUS Rounded 1c"
        fontWeight="bold"
        fontSize='lg'
        ml={3}
      >
        Ringo Chui
      </Text>
    </LogoBox>
  );
};
export default Logo;
