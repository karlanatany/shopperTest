import React, { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext.js"
import { ModalFinalyPurchase } from "../components/ModalFinalyPurchase.js"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from "@chakra-ui/react"
import { ButtonComponent } from "../components/ButtonComponent.js"
import { CartItem } from "../components/CartItem.js"


export const Cart = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = React.useRef()
  const { states, setters } = useContext(GlobalStateContext)
  const { productsCart } = states
  const { clearCart } = setters

  let totalPrice = 0

  const products = (productsCart || []).map((product) => {
    totalPrice += (Number(product.qty) * Number(product.price))
    return (
      <CartItem
        key={product.id}
        name={product.name}
        price={product.price}
        qty={product.qty}
        subtotal={product.price * product.qty}
        id={product.id}
      />
    )
  })
  return (
    <>
      <Button ref={btnRef} colorScheme='whiteAlpha'  onClick={onOpen} m={5}>
        Carrinho
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Meu Carrinho:
            <p>Preço total R$ {totalPrice}</p>
          </DrawerHeader>
          <DrawerBody>
            {products}
          </DrawerBody>
          <DrawerFooter m={'auto'}>
            <ButtonComponent
              onClick={clearCart}
              text={'Limpar Carrinho'}
            />
            <ModalFinalyPurchase />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )

}
