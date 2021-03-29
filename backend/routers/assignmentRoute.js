import express from "express"
import auth from "../middleware/auth.js"
import Assignment from "../models/assignmentmodel.js"

const router = express.Router()

router.post("/addassignment", auth, async (req, res) => {
  const { title, unit, question } = req.body
  const lec = req.user
  try {
    const assignment = new Assignment({ title, unit, question, lec: lec._id })
    await assignment.save()
    res.send({ success: "Created" })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.get("/assignments", auth, async (req, res) => {
  const assignments = await Assignment.find({}).populate("lec", "name")
  try {
    if (assignments) {
      res.send({ assignments })
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

export default router
