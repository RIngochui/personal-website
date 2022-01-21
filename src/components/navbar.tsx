import { SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton, Flex } from "@chakra-ui/react";
import Logo from "./logo";

const NavBar = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <div>
      <Logo/>
      <IconButton aria-label="toggle darkmode" icon={<SunIcon />} onClick={toggleColorMode} float='right' m={3}/>
    </div>
  );
};
export default NavBar;
