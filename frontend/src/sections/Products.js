import React, { useContext, useState } from "react"
import GlobalStateContext from "../global/GlobalStateContext.js"
import { CardProduct } from "../components/CardProduct.js"
import { Title } from "../components/Title.js"
import { Box, Flex, Input } from "@chakra-ui/react"

export const Products = () => {
  const { states } = useContext(GlobalStateContext)
  const { products } = states
  const [query, setQuery] = useState('')

  const productsList = products && products
    .filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase())
    })
    .map((product) => {
      return (
        <CardProduct
          key={product.id}
          product={product}
        />
      )
    })

  const onChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Box w='100vw' display='flex' flexDir='column' alignItems='center'>
      <Title>Lista de Produtos</Title>
      <Input
        htmlSize={10} width='auto'
        placeholder='Buscar produto'
        value={query}
        onChange={onChangeQuery} 
        m={5}/>


      <Flex flexDir={'row'} flexWrap={'wrap'} rowGap={8} justifyContent='center'>
        {productsList}
      </Flex>
    </Box>
  )
}