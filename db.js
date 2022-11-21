import mysql from 'mysql'

 export const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password', 
    port : "3307",
    database:"blog"

})