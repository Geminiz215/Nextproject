import { useRouter } from "next/router";
import { Box, Badge, Image, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import data from "../../data/csvjson.json";
import { useEffect } from "react";

interface dataMenu {
  id: number;
  menu: string;
  harga: number;
  description: string;
  kode: string;
  tanggal: string;
  gambar: string;
  rating: number;
}

interface MenuDetailProps {
  menu: dataMenu;
}

export default function myQuery(props: MenuDetailProps) {
  const router = useRouter();
  const kode = router.query;
  const { menu } = props;
  return (
    <Flex w={"100vw"}  justifyContent="center" mt={"5"}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={`/images/menu/${menu.gambar}`} width="100%" maxH={"350"} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {menu.menu}
          </Box>

          <Box>
            {menu.harga}
            <Box as="span" color="gray.600" fontSize="sm">
              / Rp
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < menu.rating ? "teal.500" : "gray.300"}
                />
              ))}
          </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {menu.description} reviews
            </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export function getStaticPaths() {
  const dataMenu = data;

  const paths = dataMenu.map((menu) => ({
    params: {
      kode: `${menu.kode}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface getStaticProps {
  params: {
    kode: string;
  };
}

export function getStaticProps(context: getStaticProps) {
  const { kode } = context.params;
  let menu;

  data.map((res) => {
    if (res.kode == kode) {
      menu = res;
    }
  });

  return {
    props: {
      menu,
    },
  };
}
