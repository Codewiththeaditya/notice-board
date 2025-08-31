const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");


router.get('/signup', (req,res)=>{
    res.render('pages/signup.ejs');
});

router.post('/signup', wrapAsync(async(req, res)=>{
    let {username, email, password} = req.body;
    let newUser = new User({email,username});
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err)=>{
        if(err) return next(err);
        req.flash('success', 'signup successfully!');
        res.redirect('/home');
    });
}));


router.get("/login", (req,res) => {
    res.render("pages/login.ejs");
})

router.post("/login",passport.authenticate("local",{failureFlash: true, failureRedirect: '/auth/login'}),wrapAsync(async(req,res)=>{
    req.flash('success', 'Logged in successfully!');
    console.log(req.originalUrl);
    res.redirect("/home");
}));

module.exports = router;




