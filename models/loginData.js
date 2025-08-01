const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({        //schema
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",userSchema);  //model created



module.exports = User;     //model name