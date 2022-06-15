import knex from 'knex';
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    port : 3306,
    user : process.env.DB_USER,
    database : process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  }
});

// host : '127.0.0.1',
// port : 3306,
// user : 'root',
// database : 'shopper',
// password: 'natany19'