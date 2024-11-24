const mongoose = require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      timeSpent: {
        type: Number, // Time in minutes
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Employee=mongoose.model('Employee',EmployeeSchema)

module.exports=Employee