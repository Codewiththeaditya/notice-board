const express = require('express');
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const LostAndFound = require("../models/lost-and-found");
const {isLoggedIn} = require("../middleware.js");


router.get('/', wrapAsync(async(req, res)=>{
    const allNotices = await LostAndFound.find().sort({_id: -1});
    res.render('pages/lostandfound.ejs',{
        header: "true",
        allNotices,
        category: ["Lost","Found"],
        heading: "🕵️‍♂️ Lost and Found",
        subHeading: "Report Lost and Found item in your area",
        createDivHeading: "Report Lost/Found Item",
        cardHeading: "Lost & Found Items"
    });
}));

router.get("/:id/show",isLoggedIn,wrapAsync(async (req,res) => {
    const {section, id} = req.params;
        const card = await LostAndFound.findById(id);
        res.render("./includes/show/show",{
            header: "true",
            card,
            heading: "🕵️‍♂️ Lost and Found",
            subHeading: "Report Lost and Found item in your area",
        });
}));

router.post("/",isLoggedIn,wrapAsync(async (req,res) => {
    const {notice} = req.body;

    await LostAndFound.create(notice);
    res.redirect(`/lostandfound`);

}));


router.delete("/:id",isLoggedIn,wrapAsync(async (req,res) => {
    const {section,id} = req.params;
    await LostAndFound.findByIdAndDelete(id);
    res.redirect(`/lostandfound`);

}));


module.exports = router;