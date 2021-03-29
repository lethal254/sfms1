import mongoose from "mongoose"

const assignmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  lec: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
})

const Assignment = mongoose.model("Assignment", assignmentSchema)

export default Assignment
