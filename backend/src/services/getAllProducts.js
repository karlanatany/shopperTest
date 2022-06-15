import { connection } from "../infra/connection.js"

export const getAllProducts = async(req, res) => {
  try {
    const data = await connection.select()
    .table('products')
    res.json(data)
  } catch (error) {
    res.status(500).json({message: `Ops, we've encoutered an error`, error})
  }
}