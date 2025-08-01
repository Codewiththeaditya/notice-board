let mongoose = require("mongoose");

let lostAndFoundSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        maxlength: 50
    },
    content: {
        type: String,
        minlength: 10,
        required: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }
})

let LostAndFound = mongoose.model("LostAndFound",lostAndFoundSchema);

module.exports = LostAndFound;