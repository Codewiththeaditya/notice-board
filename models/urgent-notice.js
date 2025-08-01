let mongoose = require("mongoose");

let urgentNoticeSchema = new mongoose.Schema({
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

let UrgentNotice = mongoose.model("UrgentNotice",urgentNoticeSchema);

module.exports = UrgentNotice;