import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";               //here
import "slick-carousel/slick/slick-theme.css";         //here
import theme from './../theme'
import { ColorModeScript } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />      
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
