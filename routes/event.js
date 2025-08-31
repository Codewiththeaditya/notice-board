const Event = require("../models/event");
const express = require('express');
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const {isLoggedIn} = require("../middleware.js");



router.get('/', wrapAsync(async(req, res)=>{
    const allNotices = await Event.find().sort({_id: -1});
    res.render('pages/event.ejs',{
        header: "true",
        allNotices,
        category: ["Social Events","Safety Meeting","Workshop","Sports","Art & Culture","Educational"],
        heading: "📢 Events",
        subHeading: "Discover upcoming community events",
        createDivHeading: "Create Event",
        cardHeading: "Upcoming Events"
    });
}));

router.get("/:id/show",isLoggedIn,wrapAsync(async (req,res) => {
    const { id} = req.params;
        const card = await Event.findById(id);
        res.render("./includes/show/show.ejs",{
            header: "true",
            card,
            heading: "📢 Events",
            subHeading: "Discover upcoming community events"
        });
}));

router.post("/",isLoggedIn,wrapAsync(async (req,res) => {
    const {notice} = req.body;

    await Event.create(notice);
    res.redirect(`/event`);

}));


router.delete("/:id",isLoggedIn,wrapAsync(async (req,res) => {
    const {section,id} = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect(`/event`);

}));


module.exports = router;