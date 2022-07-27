import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function MyCard() {
  return (
    <Flex
      width={["300px","40%", "30%"]}
      borderRadius="15"
      border={"solid"}
      borderColor="white"
      flexDir={"column"}
      alignItems="center"
      p={"12"}
    >
      <Image
        src="/images/people/1.jpeg"
        m="4"
        boxSize={"100px"}
        borderRadius="50"
      />
      <Text color={"white"} fontSize="sm" textAlign="center" mt={"5"}>
        "makanannya sangat lezat dan menarik untuk dicoba selain itu Ngak ribet
        cara mesennya dan makannya gila sih enak banget" dan juga "tempatnya
        sangat nyaman dan makanannya enak enak"
      </Text>
    </Flex>
  );
}
