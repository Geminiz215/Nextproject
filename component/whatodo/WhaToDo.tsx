import { Box, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";

export default function WhaToDo() {
  return (
    <Flex justifyContent={"center"} p="5" minH="320" width={"100%"}> 
      <Wrap spacing={"16"}>
        <Box width={"300px"} m="4">
          <Flex justifyContent={"center"} m="1">
            <Image src="vegetable-box.png" boxSize={"50"} />
          </Flex>
          <Heading as={"h3"} m="1" fontSize={"2rem"} fontFamily="cursive">
            bahan berkualitas
          </Heading>
          <Text textAlign={"center"} fontSize="sm">
            dimana kami sebagai tempat makan, pasti sangat menjaga kualitas dari
            makanan &amp; minuman kami. jadi jangan ragu dengan hasil makanan
            dan minumannya
          </Text>
        </Box>
        <Box width={"300px"} m="4">
          <Flex justifyContent={"center"} m="1">
            <Image src="vegetable-box.png" boxSize={"50"} />
          </Flex>
          <Heading as={"h3"} m="1" fontSize={"2rem"} fontFamily="cursive">
            bahan berkualitas
          </Heading>
          <Text textAlign={"center"} fontSize="sm">
            kami menyediakan tempat yang sangat cozy untuk disinggahi dan sangat
            cocok untuk anak muda yang pecinta makanan dan minuman khas daerah
            sehingga para pelanggan nyaman berlama lama ditempat kami
          </Text>
        </Box>
        <Box width={"300px"} m="4">
          <Flex justifyContent={"center"} m="1">
            <Image src="vegetable-box.png" boxSize={"50"} />
          </Flex>
          <Heading as={"h3"} m="1" fontSize={"2rem"} fontFamily="cursive">
            bahan berkualitas
          </Heading>
          <Text textAlign={"center"} fontSize="sm">
            tentu saja waroeng solo menyediakan berbagai macam makanan dan
            minuman khas daerah jawa. tidak hanya daerah jawa tengah tapi jawa
            barat, jawa timur dan jakarta pun termasuk didalamnya
          </Text>
        </Box>
      </Wrap>
    </Flex>
  );
}
