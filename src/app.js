import express from "express"
import {PORT} from "./config.js"
import {pool} from "./db.js"
const app = express();

app.listen(PORT)
console.log("algo");

app.get("/", async  (req,res)=> {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)

})

app.get("/ping", async(req,res)=> {
 const result=  await pool.query('SELECT "hola mundo" as RESULT')
 console.log(result)
    res.send("webbbbbb")
})

app.get("/create", async(req,res)=> {
    const result=  await pool.query('INSERT INTO users(name) VALUES ("John")')
    
    res.json(result)
   })