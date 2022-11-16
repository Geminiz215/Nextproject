import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface massage {
  msg: string
  img: string
}
export default function MyCard(props:massage) {
  return (
    <Flex
      width={["300px","300px","40%", "30%"]}
      borderRadius="15"
      border={"solid"}
      borderColor="white"
      flexDir={"column"}
      alignItems="center"
      p={"12"}
    >
      <Image
        src={`/images/people/${props.img}`}
        m="4"
        boxSize={"100px"}
        borderRadius="50"
      />
      <Text color={"white"} fontSize="sm" textAlign="center" mt={"5"}>
        {props.msg}
      </Text>
    </Flex>
  );
}
