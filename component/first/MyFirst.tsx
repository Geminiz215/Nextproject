import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import React, { useRef } from "react";
// import Select from "react-select";

export interface mylink {
  galery: any;
  about: any;
}

export default function MyFirst(props: mylink) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const goTo = (curRef: any) => {
    window.scrollTo({
      top: curRef.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const { colorMode, toggleColorMode } = useColorMode();

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Box
      className="first"
      bgImage={`url('/images/background/main.jpg')`}
      bgRepeat="no-repeat"
      bgSize={"size"}
      height={"98vh"}
      color="white"
      backgroundSize={"cover"}
      width="100%"
      display={"flex"}
      flexDir="column"
    >
      <Flex
        width={"100%"}
        height="100vh"
        justifyContent="center"
        position={"absolute"}
      >
        <Box width="73%" paddingLeft="5">
          <Heading
            as={"h2"}
            fontWeight={"500"}
            fontSize="4xl"
            fontFamily="sans-serif"
          >
            waroeng solo
          </Heading>
          <UnorderedList marginTop={"1"} mb={"1rem"}>
            <ListItem
              fontSize={"17px"}
              display="inline-block"
              float={"right"}
              paddingRight={"1%"}
            >
              <Link
                href="farrppy"
                bgColor={"transparent"}
                textDecoration="none"
              >
                <i className="bi bi-instagram" />
              </Link>
            </ListItem>
            <ListItem
              fontSize={"17px"}
              display="inline-block"
              float={"right"}
              paddingRight={"1%"}
            >
              <Link
                href="farrppy"
                bgColor={"transparent"}
                textDecoration="none"
              >
                <i className="bi bi-facebook" />
              </Link>
            </ListItem>
            <ListItem
              fontSize={"17px"}
              display="inline-block"
              float={"right"}
              paddingRight={"1%"}
            >
              <Link
                href="farrppy"
                bgColor={"transparent"}
                textDecoration="none"
              >
                R
              </Link>
            </ListItem>
            <ListItem
              fontSize={"17px"}
              display="inline-block"
              float={"right"}
              paddingRight={"1%"}
            >
              <Link
                href="farrppy"
                bgColor={"transparent"}
                textDecoration="none"
              >
                H
              </Link>
            </ListItem>
          </UnorderedList>
          <br />
          <hr />

          <Flex >
            <Link
              onClick={() => {
                goTo(props.galery.current);
              }}
            >
              <Text m={"1"} fontSize={"md"}>
                Menu
              </Text>
            </Link>
            <Link
              onClick={() => {
                goTo(props.about.current);
              }}
            >
              <Text m={"1"} fontSize={"md"}>
                About
              </Text>
            </Link>
            <Link
              onClick={() => {
                goTo(props.about.current);
              }}
            >
              <Text m={"1"} fontSize={"md"}>
                Location
              </Text>
            </Link>
            <Link
              onClick={() => {
                goTo(props.about.current);
              }}
            >
              <Text m={"1"} fontSize={"md"}>
                contact
              </Text>
            </Link>
            <Spacer />
            <Button onClick={toggleColorMode} variant="outline" mt={1} display={["none","inherit","inherit","inherit"]}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </Flex>
          <Flex flexDirection={["column", "column", "inherit", "inherit"]}>
            <Box maxW={"500px"}>
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets3.lottiefiles.com/packages/lf20_tll0j4bb.json"
                style={{ width: "100%", height: "100%" }}
              ></lottie-player>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
