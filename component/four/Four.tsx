import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react";

export default function Four() {
  return (
    <Box
      className="four"
      bgSize={"cover"}
      bgRepeat="no-repeat"
      bgAttachment={"fixed"}
      height="110vh"
      bgImage={`url('/images/background/four.jpeg')`}
    >
      <Flex
        width={"100%"}
        height="100%"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Heading
          as="h1"
          color="white"
          textAlign={"center"}
          fontSize="2.5rem"
          fontWeight="500"
          mb={"12"}
        >
          Mau makan apa hari ini <br />
          untuk mengembalikan mood <br />
          kamu klik di bawah ini
        </Heading>
        <Link>
          <Button
            height={"20"}
            width="200px"
            size={"lg"}
            colorScheme="teal"
            variant="outline"
          >
            <Text textDecoration={"none"}>Read More</Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
