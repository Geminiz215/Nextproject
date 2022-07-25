import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Box p="2">
      <Image src="/images/1.jpeg" borderRadius={"15"} />
      <Box p={"2"}>
        <Flex alignItems={"center"}>
          <Image src="/images/icon/rupiah.png" boxSize={"10"} />
          <Text paddingLeft={"2"} fontFamily="cursive" color={"green.500"}>
            Rp. 50.000
          </Text>
        </Flex>
        <Heading
          size={"md"}
          as="h4"
          fontFamily="cursive"
          m={"1.5"}
          color="green.700"
        >
          Title
        </Heading>
        <Button colorScheme="whatsapp" variant="outline">
          view more
        </Button>
      </Box>
    </Box>
  );
}
