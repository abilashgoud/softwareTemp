import {
  Box,
  Container,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/images/logo+name.png";

// components
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyItems="center"
        alignItems="center"
        p={3}
        bg="#253D5B"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Image
          height="50px"
          marginLeft="auto"
          marginRight="auto"
          align="center"
          src={logo}
          alt="RealConnect"
        />
      </Box>
      <Box bg="#253D5B" w="100%" p={4} borderRadius="lg">
        <Tabs isFitted variant="solid-rounded" color="#5bcbcb">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
