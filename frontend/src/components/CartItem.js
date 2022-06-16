import styled from "styled-components";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext.js";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

export const ContainerCart = styled.div` 
border:1px solid gray;
width: 100%;
height: 110px;
display: flex;
flex-direction: column ;
padding-bottom: 5px ;
margin-top:15px;
border-radius: 10px;
`

export const ContainerText = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
padding-left: 15px;
`

export const BoxOptions = styled.div`
width: 25% ;
display:flex;
flex-direction: column ;
color: black;
justify-content: space-between;
align-items: center;
font-size: 15px;
height: 50px ;
margin: 5px;
`
export const ContainerOptions = styled.div`
display: flex;
`

export const CartItem = (props) => {
  const { setters } = useContext(GlobalStateContext)
  const { removeFromCart, addToCart } = setters

  return (
    <ContainerCart>
      <ContainerText>
        <p><b>{props.name}</b> </p>
      </ContainerText>
      <ContainerOptions>
        <BoxOptions>
          <p> Valor</p>
          <p>R$ {props.price}</p>
        </BoxOptions>
        <BoxOptions>
          <p> Quantidade</p>
          <p>R$ {props.qty}</p>
        </BoxOptions>
        <BoxOptions>
          <p> Quantidade</p>
          <NumberInput  min={0} maxW='100px'  size='sm' value={props.qty}>
          <NumberInputField/>
          <NumberInputStepper>
            <NumberIncrementStepper onClick={() => addToCart(props)}/>
            <NumberDecrementStepper onClick={() => removeFromCart(props)}/>
          </NumberInputStepper>
        </NumberInput>
        </BoxOptions>
        <BoxOptions>
          <p>Subtotal</p>
          <p>R$ {props.subtotal}</p>
        </BoxOptions>
      </ContainerOptions>
    </ContainerCart>
  )
} 