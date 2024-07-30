import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

//middleware
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // for json data
app.use(express.urlencoded({extended : true, limit: "16kb"})) // url data
app.use(express.static("public")) // image favicon pdf store for temperary
app.use(cookieParser()) // for cookie

export {app}