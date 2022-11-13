import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";

export interface ChildProps{
  aboutLink: any
}

export default function Footer(props : ChildProps) {



  const linkRef = useRef(null)
  props.aboutLink(linkRef)

  return (
    <Box p={["10%","10%","4%"]} bgColor={"#2D2B3A"} color="white">
      <Flex
        width={"100%"}
        gap="3"
        flexDir={["column","column", "inherit", "inherit"]}
        justifyContent="center"
        alignItems={"centerd"}
      >
        <Box width={["100%","100%", "40%", "30%"]} p="2" ref={linkRef}>
          <Heading as={"h4"} fontSize="xl" fontFamily={"monospace"}>
            contact Info
          </Heading>

          <Box display={"flex"} flexDir="column" gap={"3"} p="1">
            <Flex>
              <Image src="/images/icon/pin.png" boxSize={"5"} />
              <Text ml={"3"} as="cite" width={["300px", "100%", "100%"]}>
                Ruko D'Smart Blok I 06 Perumahan Duta Harapan/Telaga Mas,
                Kelurahan, Harapan Baru, Kec. Bekasi Utara, Kota Bks, Jawa Barat
                17123
              </Text>
            </Flex>
            <Flex>
              <Image src="/images/icon/email.png" boxSize={"5"} />
              <Text ml={"3"} as="cite">
                thif@gmail.com
              </Text>
            </Flex>
            <Flex>
              <Image src="/images/icon/phone.png" boxSize={"5"} />
              <Text ml={"3"} as="cite">
                +123456789
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box width={["100%","100%", "40%", "30%"]} p="2">
          <Heading as={"h4"} fontSize="xl" fontFamily={"monospace"}>
            waroeng solo
          </Heading>

          <Text color={"white"} fontSize="xs" as={"cite"} width="300px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            sapiente pariatur consequatur atque hic, labore ipsam? Officiis
            incidunt consequatur, nesciunt architecto reiciendis, sit fugit
            placeat, praesentium tempore voluptate ad minima.
          </Text>
        </Box>
        

        <Box width={["100%","100%", "40%", "30%"]} position="relative">
        <Heading as={"h4"} fontSize="xl" fontFamily={"monospace"}>
          Location
        </Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.89869945772855!2d107.02122140734024!3d-6.213619399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f9fe48de049%3A0x2c2d956dc136be50!2sws%20transporter!5e0!3m2!1sid!2sid!4v1658986653793!5m2!1sid!2sid"
            width="100%"
            height="250"
            loading="lazy"
          />
        </Box>
      </Flex>
    </Box>
  );
}
