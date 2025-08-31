const express = require('express');
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const PostNotice = require("../models/post-notice.js")
const LostAndFound = require("../models/lost-and-found");
const Event = require("../models/event");
const UrgentNotice = require("../models/urgent-notice");

const sections = {
    rulesandguidelines:{
        heading:"📚 Rules & Guidelines",
        subHeading: "Report lost or found items in your area"
    },
    contactandfeedback:{
        heading: "📬 Contact/Feedback",
        subHeading: "Send suggestions or queries to moderators"
    }
}


// POST ROUTE :






//to go to rules-and-regulation page :
router.get("/rulesandguidelines",(req,res)=>{
    res.render("rules-and-guidelines.ejs");
});




//to go to contact-feedback page :
router.get("/contact-feedback",(req,res)=>{
    res.render("contact-feedback.ejs");
});


module.exports = router;