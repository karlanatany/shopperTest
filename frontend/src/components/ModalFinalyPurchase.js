import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react"
import axios from "axios"
import React, { useContext, useRef } from "react"
import GlobalStateContext from "../global/GlobalStateContext.js"
import { ButtonComponent } from "./ButtonComponent.js"
import { useForm } from "react-hook-form";
import {alertSuccess, alertError} from '../helpers/index.js'

export const ModalFinalyPurchase = () => {
  const { states, setters } = useContext(GlobalStateContext)
  const { productsCart } = states
  const { setProductsCart, clearCart} = setters
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit} = useForm()
  const { initialRef, finalRef } = useRef(null)

  const finalizeOrder = (values) => {

    return new Promise((resolve) => {

      setTimeout(() => {
        const body = {
          customerName: values.name,
          dateWithdrawal: values.date,
          products: productsCart
        }

        axios
          .post('http://localhost:3030/orders', body)
          .then(async () => {
            await alertSuccess(`${values.name} sua compra foi realizada com sucesso.`)
            resolve()
          }, 3000)
          .catch(err => {
            alertError(err, "Algo deu errado ao enviar seu pedido!")
          })
      })
      
      clearCart()
    })
  }
  return (
    <>
      <ButtonComponent text='Finalizar Compra' onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informações de entrega:</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(finalizeOrder, setProductsCart, onClose)}>
              <FormControl>
                <FormLabel htmlFor="name">Nome e Sobrenome:</FormLabel>
                <Input
                  id="name"
                  placeholder='Nome e sobrenome'
                  type="text"
                  ref={initialRef}
                  {...register("name")}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="date">Data de retirada</FormLabel>
                <Input
                  id="date"
                  type="date"
                  placeholder='dd/mm/aaaa'
                  {...register("date")}
                />
              </FormControl>
              <ModalFooter>
                <Button colorScheme='purple' mr={3} type='submit' onClick={onClose}>
                  Concluir
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}