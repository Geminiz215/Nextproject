import { Box, Flex, Image } from "@chakra-ui/react";

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
      <Flex w={"100%"} h="100%" justifyContent={"center"} textAlign="center">
        hallo
      </Flex>
    </Box>
  );
}
