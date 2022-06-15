import { connection } from "../infra/connection.js"
import { v4 as uuidv4 } from "uuid"

export const createOrder = async (req, res) => {
  try {
    const data = req.body

    const order = {
      id: uuidv4(),
      customer_name: data.customerName,
      date_withdrawal: data.dateWithdrawal,
    }

    const dbOrderProducts = []

    data.products.forEach((product) => {
      connection.raw(`
      UPDATE products
      SET qty_stock = qty_stock - ${product.qty}
      WHERE id = '${product.id}'
      `)
        .then(console.log)
        .catch(console.log)

      dbOrderProducts.push({
        order_id: order.id,
        product_id: product.id,
        qty: product.qty,
      })
    })

    await connection.insert(order).into('orders')
    await connection.insert(dbOrderProducts).into('orders_products')

    res.json(data)
  } catch (error) {
    res.status(500).json({ message: `Ops, we've encoutered an error`, error })
  }
}