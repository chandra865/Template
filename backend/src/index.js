import dotenv from "dotenv"
import connectDB from "./db/connection.js"
import {app} from "./app.js"
dotenv.config({
    path : './env'
})


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 4000, () =>{
        console.log(`Server is runnig at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})