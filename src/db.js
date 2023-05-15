import {createConnection, createPool} from "mysql2/promise"
import {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER,PORT} from './config.js'
// export const conn = await createConnection({
//     user:"root",
//     password:"root",
//     host:"localhost",
//     port: 3308,
//     database: soloprueba
// })

export const pool = createPool({
    user:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})
