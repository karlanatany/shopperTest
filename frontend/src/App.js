import { GlobalState } from "./global/GlobalState.js";
import { Products } from "./sections/Products.js";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header.js";

function App() {
  return (
    <GlobalState>
      <Flex flexDir={'column'} w={'100wh'} h={'100vh'} alignItems='center'>
      <Header text='Shoppercommerce'/>
        <Products />
      </Flex>
    </GlobalState>
  )
}

export default App;
