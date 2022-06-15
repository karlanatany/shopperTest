import { connection } from "../infra/connection.js"

export const getAllOrders = async(req, res) => {
  try {
    const data = await connection.select('customer_name', 'date_withdrawal')
    .table('orders')
    res.json(data)
  } catch (error) {
    res.status(500).json({message: `Ops, we've encoutered an error`, error})
  }
}