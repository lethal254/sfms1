import express from "express"
import auth from "../middleware/auth.js"
import Answer from "../models/answersmodel.js"

const router = express.Router()

router.post("/addanswer", auth, async (req, res) => {
  const { assignment, answer } = req.body
  const student = req.user
  try {
    const answerr = new Answer({ student, assignment, answer })
    await answerr.save()
    res.send({ success: "Created" })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.get("/answers", auth, async (req, res) => {
  const answers = await Answer.find({})
  try {
    const outgoingAnswers = answers.filter((answer) =>
      answer.student.equals(req.user._id)
    )
    res.send({ answers: outgoingAnswers })
  } catch (error) {
    res.status(400).send()
  }
})

router.get("/allanswers", auth, async (req, res) => {
  const answers = await Answer.find({})
  try {
    res.send({ answers: answers })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

export default router
