import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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
      <Flex width={"100%"} justifyContent="center" position={"absolute"}>
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

          <Flex>
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
          </Flex>
          {/* <Box color={"black"} display="grid" height={"50vh"} alignItems={"center"}>
            <Select options={options} />
          </Box> */}
        </Box>
      </Flex>

      <Spacer />
    </Box>
  );
}
