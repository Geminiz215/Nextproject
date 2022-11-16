import { Box, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";
import Card from "./Card";

export default function Five() {
  return (
    <Box width="100%" bgColor={"#222828"}>
      <Flex alignItems={"center"} flexDirection={"column"}>
        <Image src="/images/icon/quote.png" boxSize={"40px"} m="5%" />
        <Text
          fontSize={"sm"}
          width={"40vw"}
          color="white"
          textAlign="center"
          mb={"1rem"}
        >
          "Makanan adalah segalanya bagi kita. Ini merupakan perpanjangan dari
          perasaan nasionalis, perasaan etnis, sejarah pribadimu, provinsimu,
          daerahmu, sukumu, nenekmu. Itu tidak dapat dipisahkan sejak awall."
        </Text>
        <Text color="white" textAlign="center" mb={"1rem"}>
          - Anthony Bourdain
        </Text>
      </Flex>
      <Heading color={"white"} textAlign="center" mb={"5"}>
        Testimoni
      </Heading>
      <Flex
        p={"5"}
        alignItems="center"
        justifyContent={"center"}
        gap="5"
        width="100%"
        flexDir={["column", "column", "inherit", "inherit"]}
      >
        <Card
          msg=" Ini udah order yang kesekian kalinya disini, dan ga pernah kecewa! Pengirimannya cepet banget! Rasa makanannya juga enak bangett, ga pernah bosen.
          Aku paling suka Gudegnya, enak banget rasanya nagih bikin pengen balik"
          img="1.jpeg"
        />
        <Card
          msg="makanannya sangat lezat dan menarik untuk dicoba selain itu Ngak ribet
        cara mesennya dan makannya gila sih enak banget dan juga tempatnya
        sangat nyaman dan makanannya enak enak"
        img="DANU.jpg"
        />
        <Card
          msg="makanannya sangat lezat dan menarik untuk dicoba selain itu Ngak ribet
        cara mesennya dan makannya gila sih enak banget dan juga tempatnya
        sangat nyaman dan makanannya enak enak"
        img="Doni.jpg"
        />
      </Flex>
      <br />
    </Box>
  );
}
