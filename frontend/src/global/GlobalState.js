import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext.js"
import { alertSuccess, alertError } from "../helpers";

export const GlobalState = (props) => {

  const [products, setProducts] = useState([])
  const [productsCart, setProductsCart] = useState([]);

  const getProducts = () => {
    axios
      .get('http://localhost:3030/products')
      .then((res) => setProducts(res.data))
      .catch((err) => alertError(err, 'Algo deu errado, tente novamente.'))
  }

  const updateStock = (product, action) => {
    const newProducts = [...products]

    const productIndex = newProducts.findIndex((productItem) => product.id === productItem.id)
    if (action === 'add') {
      newProducts[productIndex].qty_stock -= 1
    } else {
      newProducts[productIndex].qty_stock += 1
    }
  }

  const addToCart = (product) => {
    const newProductsCart = [...productsCart]

    const productIndex = newProductsCart.findIndex((productItem) => product.id === productItem.id)

    if (product.qty_stock <= 0) {
      alertError('', 'Produto indisponível!')
      return
    }
    if (productIndex === -1) {
      newProductsCart.push({ id: product.id, qty: 1, name: product.name, price: product.price, qty_stock: product.qty_stock })
      alertSuccess(`${product.name} adcionado ao carrinho!`)
    } else {
      newProductsCart[productIndex].qty += 1
    }
    setProductsCart(newProductsCart)
    updateStock(product, 'add')
  }

  const removeFromCart = (product) => {
    const newProductsCart = [...productsCart]

    const productIndex = newProductsCart.find((productItem) => product.id === productItem.id)
    if (productIndex && productIndex.qty > 1) {
      productIndex.qty -= 1
      setProductsCart(newProductsCart)
    } else {
      const arrayFiltered = newProductsCart.filter(
        (productItem) => productItem.id !== product.id
      )
      setProductsCart(arrayFiltered)
      updateStock(product, 'remove')
    }
  }

  const clearCart = () => {
    setProductsCart([])
    alertSuccess(`Seu carrinho foi limpo com sucesso!`)
  }

  useEffect(() => {
    if (!products.length) {
      getProducts()
    }
  }, [products])

  const states = {
    products,
    productsCart
  }

  const setters = {
    addToCart,
    removeFromCart,
    clearCart
  }

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
