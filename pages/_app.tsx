import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";               //here
import "slick-carousel/slick/slick-theme.css";         //here
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
