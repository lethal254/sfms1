import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import connectDB from "./database/db.js"
import userRouter from "./routers/usersRoute.js"
import assignmentRouter from "./routers/assignmentRoute.js"
import answerRouter from "./routers/answerRoutes.js"

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(assignmentRouter)
app.use(answerRouter)

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("API is running")
})

app.listen(port, console.log(`Server is running on port ${port}`))
