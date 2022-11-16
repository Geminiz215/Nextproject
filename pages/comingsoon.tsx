import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <Box
      bgImg={
        "https://images.unsplash.com/photo-1505682750263-f3f9e519c565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
      width="100vw"
      h={"100vh"}
      bgSize="cover"
    >
      <Flex
        w={"100%"}
        height="100vh"
        width={"100vw"}
        position={"relative"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box>
          <Heading as={"h1"} fontSize={["4xl","6xl","9xl","9xl"]}>
            Coming Soon
          </Heading>
          <br />
          <Flex justifyContent={"center"} >
            <Link href={"/"}>
            <Button size={"md"}>Back to Dashboard</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
