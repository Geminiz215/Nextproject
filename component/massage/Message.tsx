import { Box, Heading, Text } from "@chakra-ui/react";

export default function Message() {
  return (
    <Box
      className="Message"
      bgColor={"#222828"}
      color="#fcfdff"
      padding={"10%"}
    >
      <Box
        className="container"
        w={"100%"}
        paddingRight={"15px"}
        paddingLeft={"15px"}
        marginRight={"auto"}
        marginLeft={"auto"}
        maxW={["240px", "720px", "960px"]}
      >
        <Heading
          textAlign={"center"}
          fontSize={"2rem"}
          marginBottom="0.5rem"
          fontFamily={"inherit"}
          fontWeight="500"
          lineHeight={"1.2"}
        >
          Punten mamank
        </Heading>
        <Text textAlign={"center"} marginTop={"0"} marginBottom="1rem" fontSize={"lg"}>
          Kalian bisa menghabiskan waktu santai dengan makanan dan minuman khas
          daerah jawa. Kami menyediakan tempat yang nyaman, adem, cozy untuk
          menyantap makanan dan juga bisa untuk nongkrong- nongkrong santai
          bareng temen- ataupun keluarga Dan tentunya kami menyediakan makanan
          dan minuman yang sangat enak dan lezat seperti gudeg, soto, rawon,
          wedang jahe, bir pletok, cendol dan sebagainya.
        </Text>
      </Box>
    </Box>
  );
}
