import NavBar from "../components/navbar";
import Section from "../components/section";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorMode,
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Footer } from "../components/footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ringo Chui</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Container maxWidth="container.md" pt={12} pb={14}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("gray.300", "red.600")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I am a computer science student currently studying at York
          University.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2">Ringo Chui</Heading>
            <Text color={useColorModeValue("gray.600", "whiteAlpha.800")}>
              /ˈrə-nGgō chü-​ē/
              <br />
              Born: March 12, 1999
              <br />
              Resides in: Toronto, Ontario
              <br />
              ( Student / Developer / Graphic Designer )
            </Text>
            <a href="resume.pdf" download="ringo-chui-resume.pdf">
              <Button bg={useColorModeValue("gray.300", "red.600")} m={5} p={5}>
                résumé here
              </Button>
            </a>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, mt: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue("gray.500", "whiteAlpha.800")}
              borderWidth={4}
              m={5}
              borderStyle="solid"
              maxWidth="150px"
              display="incline-block"
              borderRadius="full"
              src="pfp.png"
              alt="Profile Picture"
              layout="fixed"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1} duration={1}>
          <Heading
            as="h3"
            size="md"
            textDecoration="underline"
            mt={3}
            mb={4}
            textDecorationColor="#525252"
          >
            About Me
          </Heading>
          <Text fontSize="sm">
            My name is Ringo Chui and I am a Software Developer from Toronto,
            Ontario. I have recieved a diploma in Computer Engineering
            Technology from Seneca College and am currently working to get a
            bachelor&apos;s degree in Computer Science at York University. I am very
            passinate about the world of technology, I enjoy playing around with
            computers whether it&apos;d be with software or hardware. In my free time
            you&apos;ll find me play video games with the boys, going out and
            shooting some hoops or fooling around a little in Photoshop or
            Premiere Pro.
          </Text>
        </Section>

        <Box display={{ md: "flex" }} pt={8}>
          <Box flexGrow={1}>
            <Section delay={0.1} duration={1}>
              <Heading
                as="h3"
                size="md"
                textDecoration="underline"
                mt={3}
                mb={4}
                textDecorationColor="#525252"
              >
                Interests
              </Heading>
              <UnorderedList>
                <ListItem>Front-End Design</ListItem>
                <ListItem>Graphic Design</ListItem>
                <ListItem>Web Applications</ListItem>
                <ListItem>Building Computers</ListItem>
                <ListItem>Video Edits</ListItem>
                <ListItem>Camping</ListItem>
                <ListItem>Basketball</ListItem>
                <ListItem>VolleyBall</ListItem>
              </UnorderedList>
            </Section>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, mt: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue("gray.500", "whiteAlpha.800")}
              borderWidth={2}
              borderRadius="lg"
              m={3}
              borderStyle="solid"
              maxWidth="500px"
              width="auto"
              height="auto"
              display="incline-block"
              src="coding.gif"
              alt="Profile Picture"
              layout="fixed"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1} duration={1}>
          <Heading
            pt={12}
            as="h3"
            size="md"
            textDecoration="underline"
            mt={3}
            mb={4}
            textDecorationColor="#525252"
          >
            Familiar with the following:
          </Heading>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Languages
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>C, C++, C#</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>JavaScript/TypeScript</ListItem>
                <ListItem>CSS/HTML</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>Bash</ListItem>
              </UnorderedList>
            </Box>
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Technologies
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>Git</ListItem>
                <ListItem>SQLite</ListItem>
                <ListItem>Oracle SQL Developer</ListItem>
                <ListItem>PostMan</ListItem>
                <ListItem>Node.JS</ListItem>
                <ListItem>Figma</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Premiere Pro</ListItem>
              </UnorderedList>
            </Box>
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Frameworks/Libraries
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>React</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>Next.JS</ListItem>
                <ListItem>Chakra UI</ListItem>
                <ListItem>ASP.NET</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Section>

        <Section delay={0.1} duration={1}>
          <Heading
            as="h3"
            size="md"
            textDecoration="underline"
            mt={3}
            mb={4}
            textDecorationColor="#525252"
          >
            Projects
          </Heading>

          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            textAlign="center"
            textColor={useColorModeValue("gray.600", "whiteAlpha.800")}
            textStyle="bold"
          >
            <GridItem
              GridItem
              rowSpan={2}
              colSpan={3}
              textAlign="center"
              bg={useColorModeValue("gray.300", "red.600")}
              borderRadius={10}
            >
              <a href="https://github.com/ArmyaAli/Squirrel-Glider1012">
                <Button width="100%" height="100%">
                  Squirrel Glider
                </Button>
              </a>
            </GridItem>

            <GridItem
              colSpan={1}
              bg={useColorModeValue("gray.300", "orange.600")}
              textAlign="center"
              borderRadius={10}
            >
              <a href="https://youtu.be/nwk44ECAk_A">
                <Button width="100%" height="100%">
                  Self-Driving RC Car
                </Button>
              </a>
            </GridItem>

            <GridItem
              colSpan={1}
              bg={useColorModeValue("gray.300", "yellow.600")}
              textAlign="center"
              borderRadius={10}
            >
              <a href="https://github.com/RIngochui/BattleShipPython">
                <Button width="100%" height="100%">
                  BattleShipPython
                </Button>
              </a>
            </GridItem>
            <GridItem
              colSpan={2}
              bg={useColorModeValue("gray.300", "green.600")}
              textAlign="center"
              borderRadius={10}
            >
              <a href="https://github.com/ArmyaAli/music-quiz">
                <Button width="100%" height="100%">
                  Music Quiz
                </Button>
              </a>
            </GridItem>
          </Grid>
        </Section>
      </Container>
      <Footer />
    </div>
  );
};
export default Main;
