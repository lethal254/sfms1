import mongoose from "mongoose"

const answersSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Assignment",
  },
  answer: {
    type: String,
    required: true,
  },
})

const Answer = mongoose.model("Answer", answersSchema)

export default Answer
