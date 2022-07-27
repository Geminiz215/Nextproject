import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Select from "react-select";

export default function MyFirst() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Box
      className="first"
      bgImage={`url('/images/background/main.jpg')`}
      bgRepeat="no-repeat"
      bgSize={"size"}
      height={"100vh"}
      color="white"
      backgroundSize={"cover"}
    >
      <Flex width={"100%"} justifyContent="center">
        <Box width="73%" minW={"520px"} paddingLeft="5">
          <Heading
            as={"h2"}
            fontWeight={"500"}
            fontSize="4xl"
            fontFamily="sans-serif"
          >
            waroeng solo
          </Heading>
          {/* <UnorderedList marginTop={"1"} mb={"1rem"}>
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
                <a
                  href="https://www.flaticon.com/free-icons/instagram"
                  title="instagram icons"
                >
                  R
                </a>
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
                <a
                  href="https://www.flaticon.com/free-icons/instagram"
                  title="instagram icons"
                >
                  H
                </a>
              </Link>
            </ListItem>
          </UnorderedList> */}
          <br />
          
          <Flex>
            <Link>
              <Text m={"1"} fontSize={"md"}>
                uy
              </Text>
            </Link>
            <Link>
              <Text m={"1"} fontSize={"md"}>
                hallo
              </Text>
            </Link>
            <Link>
              <Text m={"1"} fontSize={"md"}>
                test
              </Text>
            </Link>
          </Flex>
          {/* <Box color={"black"} display="grid" height={"50vh"} alignItems={"center"}>
            <Select options={options} />
          </Box> */}
          
        </Box>
      </Flex>
    </Box>
  );
}
