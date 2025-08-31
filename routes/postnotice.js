const express = require('express');
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const PostNotice = require("../models/post-notice.js");
const {isLoggedIn} = require("../middleware.js");



router.get('/', wrapAsync(async(req, res)=>{
    const allNotices = await PostNotice.find().sort({_id: -1});
    res.render('pages/postnotice.ejs',{
        header: "true",
        allNotices,
        category: ["Announcement","Genral","Safety","Maintainance"],
        heading: "📝 Post a Notice",
        subHeading: "Share general announcements with the community",
        createDivHeading: "Create New Notice",
        cardHeading: "Recent Notices"
    });
}));

router.get("/:id/show",isLoggedIn,wrapAsync(async (req,res) => {
    const {section, id} = req.params;
        const card = await PostNotice.findById(id);
        res.render("./includes/show/show",{
            header: "true",
            card,
            heading: "📝 Post a Notice",
            subHeading: "Share general announcements with the community",
        });
}));

router.post("/",isLoggedIn,wrapAsync(async (req,res) => {
    const {notice} = req.body;

    await PostNotice.create(notice);
    res.redirect(`/postnotice`);

}));


router.delete("/:id",isLoggedIn,wrapAsync(async (req,res) => {
    const {section,id} = req.params;
    await PostNotice.findByIdAndDelete(id);
    res.redirect(`/postnotice`);

}));


module.exports = router;