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
          textAlign="center"
          fontWeight={650}
        >
          Hello, I am a software developer currently working at Score Media and
          Gaming Inc.
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
              <br />( Software Developer )
            </Text>
            <a href="Resume 2026 VERSION 2.docx" download="ringo-chui-resume.pdf">
              <Button bg={useColorModeValue("gray.300", "red.600")} m={5} p={5}>
                résumé here
              </Button>
            </a>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, mt: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
            flexWrap="wrap"
          >
            <Image
              borderColor={useColorModeValue("gray.300", "whiteAlpha.800")}
              filter={useColorModeValue("drop-shadow(0 0 0.75rem gray)", "")}
              borderWidth={5}
              m={5}
              borderStyle="solid"
              width="150px"
              height="150px"
              objectFit="cover"
              display="inline-block"
              borderRadius="full"
              src="pfp.jpg"
              alt="Profile Picture"
            />
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
            I’m a software developer with over 3 years of experience
            building reliable, user-focused systems in fast-paced product teams.
            At Penn Entertainment and theScore, I worked on high-traffic iCasino
            platforms—designing and maintaining an in-house CMS, building tools
            that saved developers 50+ hours a year, and helping launch a
            standalone casino app that reached #2 in its category. I enjoy
            owning problems end to end, from scoping and implementation to
            monitoring and on-call support during high-stakes events. My
            technical background includes a Bachelor of Science in Computer
            Science from York University and an Advanced Diploma in Computer
            Engineering Technology from Seneca College. I work across the stack
            with Python, Elixir, TypeScript, JavaScript, and SQL, and have
            hands-on experience with tools like Node.js, React, PostgreSQL,
            Kubernetes, Docker, and Datadog. I care about clear communication,
            mentoring others, and building systems that make life easier for
            both users and teammates. Outside of work, you’ll usually find me at
            the gym, playing video games orshooting hoops.
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
                <ListItem>Full Stack Development</ListItem>
                <ListItem>Building Computers</ListItem>
                <ListItem>Graphic Design</ListItem>
                <ListItem>Camping</ListItem>
                <ListItem>Hiking</ListItem>
                <ListItem>Travelling</ListItem>
                <ListItem>Basketball</ListItem>
                <ListItem>Weight Lifting</ListItem>
              </UnorderedList>
            </Section>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, mt: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <a
              title="Click to play Squirrel Glider!"
              href="https://armyaali.github.io/Squirrel-Glider1012/"
            >
              <Image
                borderColor={useColorModeValue("gray.300", "whiteAlpha.800")}
                borderRadius="lg"
                borderWidth={5}
                m={5}
                filter={useColorModeValue("drop-shadow(0 0 0.75rem gray)", "")}
                borderStyle="solid"
                maxWidth="500px"
                width="auto"
                height="auto"
                display="inline-block"
                src="coding.gif"
                alt="coding gif"
              />
            </a>
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
          <Box display={{ md: "flex" }} flexWrap="wrap">
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Languages
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>Python</ListItem>
                <ListItem>Elixir</ListItem>
                <ListItem>TypeScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>C</ListItem>
                <ListItem>C#</ListItem>
                <ListItem>Java</ListItem>
              </UnorderedList>
            </Box>
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Backend & Frontend
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>Node.js</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>Redis</ListItem>
                <ListItem>GraphQL</ListItem>
                <ListItem>gRPC</ListItem>
                <ListItem>Kafka</ListItem>
                <ListItem>Oban</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Phoenix LiveView</ListItem>
              </UnorderedList>
            </Box>
            <Box flexGrow={1}>
              <Heading as="h3" mt={2} size="sm" mb={4}>
                Monitoring & Tools
              </Heading>
              <UnorderedList listStyleType={"none"}>
                <ListItem>Kubernetes</ListItem>
                <ListItem>Docker</ListItem>
                <ListItem>ArgoCD</ListItem>
                <ListItem>GitHub Actions</ListItem>
                <ListItem>CircleCI</ListItem>
                <ListItem>Datadog</ListItem>
                <ListItem>Splunk</ListItem>
                <ListItem>Git</ListItem>
                <ListItem>Atlassian</ListItem>
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
              rowSpan={2}
              colSpan={1}
              textAlign="center"
              textColor={useColorModeValue("red.600", "")}
              bg={useColorModeValue("gray.300", "red.600")}
              filter={useColorModeValue("drop-shadow(0 0 0.30rem red)", "")}
              borderRadius={10}
            >
              <a href="https://github.com/ArmyaAli/Squirrel-Glider1012">
                <Button width="100%" height="100%">
                  Squirrel Glider
                </Button>
              </a>
            </GridItem>

            <GridItem
              colSpan={2}
              bg={useColorModeValue("gray.300", "orange.600")}
              textColor={useColorModeValue("orange.600", "")}
              filter={useColorModeValue(
                "drop-shadow(0 0 0.30rem DarkOrange)",
                "",
              )}
              textAlign="center"
              borderRadius={10}
              overflow="hidden"
            >
              <a href="https://github.com/RIngochui/BattleShipPython">
                <Button width="100%" height="100%">
                  BattleShipPython
                </Button>
              </a>
            </GridItem>

            <GridItem
              colSpan={2}
              bg={useColorModeValue("gray.300", "yellow.600")}
              textColor={useColorModeValue("yellow.600", "")}
              filter={useColorModeValue(
                "drop-shadow(0 0 0.30rem DarkGoldenRod)",
                "",
              )}
              textAlign="center"
              borderRadius={10}
            >
              <a href="https://github.com/ArmyaAli/music-quiz">
                <Button width="100%" height="100%">
                  Music Quiz
                </Button>
              </a>
            </GridItem>
            <GridItem
              colSpan={4}
              bg={useColorModeValue("gray.300", "green.600")}
              textColor={useColorModeValue("green.600", "")}
              filter={useColorModeValue("drop-shadow(0 0 0.30rem green)", "")}
              textAlign="center"
              borderRadius={10}
            >
              <a href="https://youtu.be/nwk44ECAk_A">
                <Button width="100%" height="100%">
                  Self-Driving RC Car
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
