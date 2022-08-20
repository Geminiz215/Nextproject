import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";               //here
import "slick-carousel/slick/slick-theme.css";         //here
import theme from './../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
