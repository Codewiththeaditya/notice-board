const UrgentNotice = require("../models/urgent-notice");
const express = require('express');
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const {isLoggedIn} = require("../middleware.js");



router.get('/', wrapAsync(async(req, res)=>{
    const allNotices = await UrgentNotice.find().sort({_id: -1});
    res.render('pages/urgentnotice.ejs',{
        header: "true",
        allNotices,
        category: ["Security","Maintenance","Weather Alert","Emergency","Health And Safety"],
        heading: "🚨 Urgent Notices",
        subHeading: "Emergency and high-priority community alerts",
        createDivHeading: "Post Urgent Notice",
        cardHeading: "Urgent Notices"
    });
}));

router.get("/:id/show".isLoggedIn,wrapAsync(async (req,res) => {
    const {section, id} = req.params;
        const card = await UrgentNotice.findById(id);
        res.render("./includes/show/show",{
            header: "true",
            card,
            heading: "🚨 Urgent Notices",
            subHeading: "Emergency and high-priority community alerts",
        });
}));

router.post("/",isLoggedIn,wrapAsync(async (req,res) => {
    const {notice} = req.body;

    await UrgentNotice.create(notice);
    res.redirect(`/urgentnotice`);

}));


router.delete("/:id",isLoggedIn,wrapAsync(async (req,res) => {
    const {section,id} = req.params;
    await UrgentNotice.findByIdAndDelete(id);
    res.redirect(`/urgentnotice`);

}));


module.exports = router;