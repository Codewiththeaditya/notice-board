const express = require("express");
const app = express();
require("dotenv").config();
const port =  8080;//process.env.PORT ||
const path =  require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");


const User = require("./models/userModel.js");
const authRoute = require('./routes/user.js');
const postNoticeRoute = require('./routes/postnotice.js');
const urgentNoticeRoute = require('./routes/urgentnotice.js');
const eventRoute = require('./routes/event.js');
const lostandfoundRoute = require('./routes/lostandfound.js');
const ExpressError = require("./utils/ExpressError.js");
const {isLoggedIn} = require("./middleware.js")

const passport = require("passport");
const LocalStrategy = require("passport-local");


app.use(session({
    secret: "mysupersecretkey",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});


app.use(passport.session());
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



async function main(){
    try{
        // await mongoose.connect(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    }
    catch(err){
        console.log(err);
    }
}

main().catch((err)=>{console.log(err)});

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));





app.get('/home',(req,res)=>{
    res.render("./pages/index.ejs",);
});


app.use('/postnotice',postNoticeRoute);
app.use('/lostandfound',lostandfoundRoute);
app.use('/event',eventRoute);
app.use('/urgentnotice',urgentNoticeRoute);
app.use('/auth',authRoute);





app.all(/.*/, (req, res, next)=>{
    next(new ExpressError('Page not found',404));
})

app.use((err, req, res, next)=>{
    let {message='Something went wrong !', statusCode=500} = err;
    res.status(statusCode).render('error.ejs',{message});
})

app.listen(port,()=>{
    console.log(`Listening at port : ${port}`);
});