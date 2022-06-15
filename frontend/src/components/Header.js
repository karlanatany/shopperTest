import { Flex, Text } from "@chakra-ui/react";
import { Cart } from "../sections/Cart.js";

export const Header = () => {
  return (
    <Flex color='white' alignItems='center' bg='#6b46c1' color='white' justifyContent='space-between' boxShadow='base' w='100%' h='100px'>
        <Text fontWeight='bold' fontSize='2xl' p={2}> Shoppercommerce</Text>
        <Cart/>
    </Flex>

  )
}
