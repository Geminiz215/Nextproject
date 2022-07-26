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
import { forwardRef, RefObject, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./card";
import data from "../../data/csvjson.json";

const zoomIn = keyframes`
from {transform:  scale(1);}
to {transform:  scale(1.2);}`;

const fade = keyframes`
from {opacity: 0 ;}
to {opacity: 100;}`;

export interface ChildProps {
  galeryRef: any;
}

export default function Gallery(props: ChildProps) {
  const linkRef = useRef(null);

  props.galeryRef(linkRef);

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
    slidesToScroll: 4,
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
      <Box width={"99%"} p="4">
        <Heading
          fontFamily={"cursive"}
          color="whatsapp.600"
          paddingBottom={"3"}
          ref={linkRef}
        >
          waroeng solo menu
        </Heading>
          <Slider {...settings}>
            {data.map((x, i) => {
              return (
                <Card
                  imgsrc={`${x.gambar}`}
                  price={`${x.harga}`}
                  menu={x.menu}
                  kode={x.kode}
                  key={i}
                />
              );
            })}
          </Slider>
      </Box>
    </Box>
  );
}
