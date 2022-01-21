import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = 0, duration = 1 }: { children: any; delay: any; duration: any;}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transitionDelay={delay}
    transitionDuration={duration}
    mb={6}
  >
    {children}
  </StyledDiv>
);
export default Section;
