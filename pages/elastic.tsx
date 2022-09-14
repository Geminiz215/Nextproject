import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Fragment, useState } from "react";

export default function elastic() {
  const [handlechange, sethandle] = useState("");
  const [data, setdata] = useState("")
  const handleclick = async () => {
    axios({
        method: "get",
        url: "http://localhost:3000/api/elastic"
    }).then(x => {
        console.log(x)
    })
  }
  return (
    <Flex justifyContent={"center"}>
      <Flex flexDir="column" width="70%" justifyContent={"center"}>
        <FormControl onSubmit={(x) => console.log(x)}>
          <FormLabel>ELASTICSEARCH</FormLabel>
          <Input
            isInvalid
            onChange={(x) => {
              sethandle(x.toString());
            }}
          />
          <Button colorScheme="teal" mt={"5"} size="lg" onClick={handleclick}>
            check
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
