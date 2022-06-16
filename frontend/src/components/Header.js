import { Flex, Text } from "@chakra-ui/react";
import { Cart } from "../sections/Cart.js";

export const Header = (props) => {
  return (
    <Flex position='fixed' color='white' alignItems='center' bg='#6b46c1' color='white' justifyContent='space-between' boxShadow='base' w='100%' h='100px' mb={5}>
        <Text fontWeight='bold' fontSize='2xl' p={2}> {props.text}</Text>
        <Cart/>
    </Flex>

  )
}
