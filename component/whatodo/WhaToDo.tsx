import { Box, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";

export default function WhaToDo() {
  return (
    <Flex justifyContent={"center"} p="5" minH="320">
      <Wrap spacing={"16"}>
        <Box width={"300px"} m="4">
          <Flex justifyContent={"center"} m="1">
            <Image src="vegetable-box.png" boxSize={"50"} />
          </Flex>
          <Heading as={"h3"} m="1" fontSize={"2rem"} fontFamily="cursive">
            bahan berkualitas
          </Heading>
          <Text textAlign={"center"} fontSize="lg">
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
          <Text textAlign={"center"} fontSize="lg">
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
          <Text textAlign={"center"} fontSize="lg">
            tentu saja waroeng solo menyediakan berbagai macam makanan dan
            minuman khas daerah jawa. tidak hanya daerah jawa tengah tapi jawa
            barat, jawa timur dan jakarta pun termasuk didalamnya
          </Text>
        </Box>
      </Wrap>
    </Flex>
    // <Box
    //   className="container"
    //   w={"100%"}
    //   paddingRight={"15px"}
    //   paddingLeft={"15px"}
    //   marginRight={"auto"}
    //   marginLeft={"auto"}
    //   maxW={["240px", "720px", "960px"]}
    // >
    //   <Flex marginRight={"-15px"} marginLeft="-15" color={"#222828"}>
    //     <Box textAlign={"center"} padding={"3%"}>
    //       <Box fontSize={"40px"}>
    //         <i className="bi bi-facebook" />
    //       </Box>
    //       <Heading
    //         as={"h3"}
    //         fontSize={"1.5rem"}
    //         marginBottom={"0.5"}
    //         fontFamily="inherit"
    //         fontWeight={"500"}
    //         marginX="10px"
    //         lineHeight="1.2"
    //         color={"inherit"}
    //         marginTop="0"
    //       >
    //         bahan berkualitas
    //       </Heading>
    //       <Text marginTop={"0"} marginBottom="1rem" fontSize={"1rem"}>
    //         dimana kami sebagai tempat makan, pasti sangat menjaga kualitas dari
    //         makanan &amp; minuman kami. jadi jangan ragu dengan hasil makanan
    //         dan minumannya
    //       </Text>
    //     </Box>
    //     <Box textAlign={"center"} padding={"3%"}>
    //       <Box fontSize={"40px"}>
    //         <i className="bi bi-facebook" />
    //       </Box>
    //       <Heading
    //         as={"h3"}
    //         fontSize={"1.5rem"}
    //         marginBottom={"0.5"}
    //         fontFamily="inherit"
    //         fontWeight={"500"}
    //         marginX="10px"
    //         lineHeight="1.2"
    //         color={"inherit"}
    //         marginTop="0"
    //       >
    //         Tempat yang cozy
    //       </Heading>
    //       <Text marginTop={"0"} marginBottom="1rem" fontSize={"1rem"}>
    //         kami menyediakan tempat yang sangat cozy untuk disinggahi dan sangat
    //         cocok untuk anak muda yang pecinta makanan dan minuman khas daerah
    //         sehingga para pelanggan nyaman berlama lama ditempat kami
    //       </Text>
    //     </Box>
    //     <Box textAlign={"center"} padding={"3%"}>
    //       <Box fontSize={"40px"}>
    //         <i className="bi bi-facebook" />
    //       </Box>
    //       <Heading
    //         as={"h3"}
    //         fontSize={"1.5rem"}
    //         marginBottom={"0.5"}
    //         fontFamily="inherit"
    //         fontWeight={"500"}
    //         marginX="10px"
    //         lineHeight="1.2"
    //         color={"inherit"}
    //         marginTop="0"
    //       >
    //         Menu yang bervarian
    //       </Heading>
    //       <Text marginTop={"0"} marginBottom="1rem" fontSize={"1rem"}>
    //         tentu saja waroeng solo menyediakan berbagai macam makanan dan
    //         minuman khas daerah jawa. tidak hanya daerah jawa tengah tapi jawa
    //         barat, jawa timur dan jakarta pun termasuk didalamnya
    //       </Text>
    //     </Box>
    //   </Flex>
    // </Box>
  );
}
