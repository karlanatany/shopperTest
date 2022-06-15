import { connection } from "../infra/connection.js";
import { mockProducts } from "./mockProducts.js";

const printError = (error) => { console.log(error) }


const createTables = async () => {
  try {
    const existsTableProducts = await connection.schema.hasTable('products')
    if (!existsTableProducts) {
      await connection.schema.createTable('products', (table) => {
        table.integer('id').notNullable();
        table.string('name', 255).notNullable();
        table.float('price').notNullable();
        table.integer('qty_stock').notNullable().defaultTo(0);
        table.primary('id');
      })
    }

    const existsTableOrders = await connection.schema.hasTable('orders')
    if (!existsTableOrders) {
      await connection.schema.createTable('orders', (table) => {
        table.string('id').notNullable();
        table.string('customer_name', 255).notNullable();
        table.timestamp('date_withdrawal').notNullable().defaultTo(connection.fn.now());
        table.primary('id');
      })
    }

    const existsTableOrdersProducts =  await connection.schema.hasTable('orders_products')
    if (!existsTableOrdersProducts) {
      await connection.schema.createTable('orders_products', (table) => {
        table.string('order_id', 64).notNullable()
          .references("id").inTable("orders");

        table.integer('product_id').notNullable()
          .references("id").inTable("products");

        table.integer('qty').notNullable();

        table.primary(['product_id', 'order_id']);
      })
    }

    await connection
      .insert(mockProducts)
      .into('products')
      .onConflict()
      .ignore();
    console.log('Migrations succeded');
  } catch (error) {
    printError(error)
  }
}

const closeConnection = () => { connection.destroy() };

createTables()
  .finally(closeConnection)