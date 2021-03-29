import express from "express"
import Users from "../models/usermodel.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/signup", async (req, res) => {
  const { email, name, password, regNumber } = req.body
  console.log(email, name)
  try {
    const user = new Users({ email, name, password, regNumber })
    await user.save()
    return res.send({
      id: user._id,
      email: user.email,
      regNumber: user.regNumber,
      name: user.name,
      token: generateToken(user._id),
    })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await Users.findOne({ email })
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return res.send({
          id: user._id,
          isLec: user.isLec,
          email: user.email,
          regNumber: user.regNumber,
          name: user.name,
          token: generateToken(user._id),
        })
      }
      throw new Error("Incorrect Details")
    } else {
      throw new Error("User not found")
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.get("/userprofile", auth, async (req, res) => {
  const user = req.user
  if (user) {
    res.send(user)
  } else {
    res.status(400).send({ error: "User not found" })
  }
})

export default router
