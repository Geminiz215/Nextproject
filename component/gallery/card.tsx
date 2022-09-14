import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface menu {
  imgsrc: string;
  price: string;
  menu: string;
}

export default function Card(props: menu) {
  return (
    <Box p="2">
      {/* <Image src borderRadius={"15"} /> */}
      <Box p={"2"}>
        <Image borderRadius={"15"} width="100%" height={"200"} src={`/images/menu/${props.imgsrc}`} />
        <Flex alignItems={"center"}>
          <Image src="/images/icon/rupiah.png" boxSize={"10"} />
          <Text paddingLeft={"2"} fontFamily="cursive" color={"green.500"}>
            {props.price}
          </Text>
        </Flex>
        <Heading
          size={"md"}
          as="h4"
          fontFamily="cursive"
          m={"1.5"}
          color="green.700"
        >
          {props.menu}
        </Heading>
        <Button colorScheme="whatsapp" variant="outline">
          view more
        </Button>
      </Box>
    </Box>
  );
}
