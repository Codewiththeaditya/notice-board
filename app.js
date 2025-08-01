const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path =  require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
require("dotenv").config();

const User = require("./models/loginData.js");
const PostNotice = require("./models/post-notice.js")
const LostAndFound = require("./models/lost-and-found");
const Event = require("./models/event");
const UrgentNotice = require("./models/urgent-notice");









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


const sections = {
    postnotice:{
        model: PostNotice,
        category: ["Announcement","Genral","Safety","Maintainance"],
        heading: "📝 Post a Notice",
        subHeading: "Share general announcements with the community",
        createDivHeading: "Create New Notice",
        cardHeading: "Recent Notices"
    },
    events:{
        model: Event,
        category: ["Social Events","Safety Meeting","Workshop","Sports","Art & Culture","Educational"],
        heading: "📢 Events",
        subHeading: "Discover upcoming community events",
        createDivHeading: "Create Event",
        cardHeading: "Upcoming Events"
    },
    lostandfound: {
        model: LostAndFound,
        category: ["Lost","Found"],
        heading: "🕵️‍♂️ Lost and Found",
        subHeading: "Report Lost and Found item in your area",
        createDivHeading: "Report Lost/Found Item",
        cardHeading: "Lost & Found Items"
    },
    urgentnotice: {
        model: UrgentNotice,
        category: ["Security","Maintenance","Weather Alert","Emergency","Health And Safety"],
        heading: "🚨 Urgent Notices",
        subHeading: "Emergency and high-priority community alerts",
        createDivHeading: "Post Urgent Notice",
        cardHeading: "Urgent Notices"
    }
}

//fill id pass using pass and send using get and post
app.get("/",(req,res)=>{
    res.render("pages/index.ejs");
    // res.redirect("/login");
})

app.get("/login",(req,res)=>{
    res.render("login-page.ejs");
});

//Parse data and check the entry is correct or not :

app.post("/login",async (req,res)=>{
    let {email, password} = req.body;

    try{
        let user = await User.findOne({email: email});

        if(user){
            if(user.password === password){
                res.redirect("/index");
            }else{
                res.send("incorect pass");
            }
        }else{
            res.send("No user");
        }
    }
    catch(err){
        console.log(err);
    };
    // console.log("working");
    // res.send("ok");
});


//to go to index page :
app.get("/index",(req,res)=>{
    // res.render("./pages/index.ejs");
    res.redirect("/");
})


//GET ROUTE :

app.get("/:section",async (req,res) => {
    const {section} = req.params;
    const config = sections[section];
    if(!config){
        return res.status(404).send("Page Not Found !")
    }
    else{
        try{
            const allNotices = await config.model.find().sort({_id: -1});
            // console.log(config);
            
            res.render(`./pages/${section}`,{allNotices,config});

        }catch(err){
            console.log(err);
        };
    };
});


//show page :

app.get("/:section/:id/show",async (req,res) => {
    const {section, id} = req.params;
    const config = sections[section];

    try{
        const card = await config.model.findById(id);
        console.log(card);
        res.render("./includes/show/show",{card,config});
    }catch(err){
        console.log(err);
    }
});

//POST ROUTE :

app.post("/:section",async (req,res) => {
    const {section} = req.params;
    const config = sections[section];
    const {notice} = req.body;
    
    try{
        await config.model.create(notice);
        res.redirect(`/${section}`);
    }catch(err){
        console.log(err);
    }
});

app.delete("/:section/:id",async (req,res) => {
    const {section,id} = req.params;
    const config = sections[section];

    try{
        await config.model.findByIdAndDelete(id);
        res.redirect(`/${section}`);
    }catch(err){
        console.log(err);
    }

})


//to go to rules-and-regulation page :
app.get("/rulesandguidelines",(req,res)=>{
    res.render("rules-and-guidelines.ejs");
});




//to go to contact-feedback page :
app.get("/contact-feedback",(req,res)=>{
    res.render("contact-feedback.ejs");
});




app.listen(port,()=>{
    console.log(`Listening at port : ${port}`);
});