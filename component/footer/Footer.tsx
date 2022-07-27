import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box p="4%" bgColor={"#2D2B3A"} color="white">
      <Flex width={"100%"} gap="3" >
        <Box width={["30%","30%","100%"]} p="2">
          <Heading fontFamily={"monospace"}>waroeng solo</Heading>
          <Text color={"#898798"} fontSize="sm" width="350px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            sapiente pariatur consequatur atque hic, labore ipsam? Officiis
            incidunt consequatur, nesciunt architecto reiciendis, sit fugit
            placeat, praesentium tempore voluptate ad minima.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
