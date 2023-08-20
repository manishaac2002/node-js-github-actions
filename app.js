import express from 'express'
import {connection} from './mysql/mysql.js';

const application = express()

application.get('/', () => {
})

application.listen(8000,async()=>{
    console.log("Server is running");
    connection()
})

