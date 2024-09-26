import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
 
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
});

connPool.getConnection().then(() => {
  console.log('CONNECTED');
}).catch(err => {
  console.error('Error connecting to the database:', err);
});

export default connPool;
