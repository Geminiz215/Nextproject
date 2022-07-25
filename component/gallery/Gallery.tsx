import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import Card from "./card";

const zoomIn = keyframes`
from {transform:  scale(1);}
to {transform:  scale(1.2);}`;

const fade = keyframes`
from {opacity: 0 ;}
to {opacity: 100;}`;

export default function Gallery() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${zoomIn} infinite 0.5s alternate`;

  const Opation = prefersReducedMotion
    ? undefined
    : `${fade} 3s alternate infinite`;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerPadding: 30,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box mb={"100"}>
      {/* <Image
        src="/images/1.jpeg"
        boxSize="300px"
        _hover={{
          animation,
        }}
      /> */}

      <Box width={"100%"} p="4">
        <Heading fontFamily={"cursive"} color="whatsapp.600" paddingBottom={"3"}>waroeng solo menu</Heading>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </Box>
    </Box>
  );
}
