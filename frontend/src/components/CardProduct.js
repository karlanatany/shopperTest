import { Flex, Text } from "@chakra-ui/react";
import { ContainerOptions } from "./ContainerOptions.js";
import { ButtonComponent } from "./ButtonComponent.js"
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext.js";

export const CardProduct = (props) => {
  const { setters } = useContext(GlobalStateContext)
  const { addToCart } = setters
  const { product } = props

  return (
    <Flex
      w={250}
      h={200}
      borderColor='black.200'
      justifyContent="space-between"
      flexDir={"column"}
      borderRadius={10}
      p={5}
      shadow='md'
    >

      <Text fontSize={15} fontWeight={'bold'} colorScheme='purple'> {product.name} </Text>
      <Flex w='100%' justify='center'>
        <ContainerOptions
          title='Estoque'
          value={product.qty_stock}
        />
        <ContainerOptions
          title='Preço'
          value={product.price}
        />
      </Flex>
      <ButtonComponent
        text='Comprar'
        onClick={() => addToCart(product)}
      />
    </Flex>
  )

}