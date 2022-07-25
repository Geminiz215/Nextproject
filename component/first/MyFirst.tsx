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

export default function MyFirst() {
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
            fontSize="5xl"
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
          </UnorderedList>
          <br />
          <hr />
          <Flex>
            <Link>
              <Text m={"1"} fontSize={"lg"}>
                uy
              </Text>
            </Link>
            <Link>
              <Text m={"1"} fontSize={"lg"}>
                hallo
              </Text>
            </Link>
            <Link>
              <Text m={"1"} fontSize={"lg"}>
                test
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Flex width={"100%"} marginTop="3" justifyContent="center">
        <Box width={"370px"} height="247px" bgGradient='linear(to-l, #0F3443, #34E89E)'>
          p
        </Box>
        <Box width={"370px"} height="247px">
          <Image src="/images/1.jpeg"  />
        </Box>
        <Box width={"370px"} height="247px" bgGradient='linear(to-l, #43C6AC, #191654)'>
          p
        </Box>
      </Flex>
      <Flex width={"100%"}  justifyContent="center">
        <Box width={"370px"} height="247px">
          <Image src="/images/2.jpeg"  />
        </Box>
        <Box width={"370px"} height="247px" bgColor={"red.100"}>
          p
        </Box>
        <Box width={"370px"} height="247px">
          <Image src="/images/3.jpeg"  />
        </Box>
      </Flex>
      
    </Box>
  );
}
