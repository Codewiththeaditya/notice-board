const mongoose = require("mongoose");
const LostAndFound = require("../models/lost-and-found");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/logindetail");
        console.log("Connected");
    }catch(err){
        console.log(err);
    }
}

main().catch((err)=>{console.log(err)});

let logData = async () => {
    LostAndFound.deleteMany({});

    await LostAndFound.create(
        {
        title: "Lost Black Wallet",
        content: "Lost a black leather wallet near the college canteen. Contains ID and cash.",
        name: "Aditya Singh",
        category: "Lost"
        },
        {
        title: "Found Mobile Phone",
        content: "Found a Samsung phone near library. Screen has dog wallpaper.",
        name: "Rohit Mehra",
        category: "Found"
        },
        {
        title: "Lost Bicycle Key",
        content: "Lost my Hero cycle key near the parking area on July 25.",
        name: "Sanya Arora",
        category: "Lost"
        },
        {
        title: "Found College ID",
        content: "Found a KIET college ID card with the name ‘Kritika Sharma’.",
        name: "Rahul Joshi",
        category: "Found"
        },
        {
        title: "Lost Notebook",
        content: "Lost a brown spiral notebook with AI notes. Has my name on it.",
        name: "Ayush Kumar",
        category: "Lost"
        },
        {
        title: "Found Water Bottle",
        content: "Found a blue Milton bottle on the basketball court bench.",
        name: "Tanya Verma",
        category: "Found"
        },
        {
        title: "Lost Calculator",
        content: "Casio calculator fx-991ES lost during internals in Room 204.",
        name: "Sneha Rai",
        category: "Lost"
        },
        {
        title: "Found Spectacles",
        content: "Black round-frame glasses found in Block C near stairs.",
        name: "Devansh Patel",
        category: "Found"
        },
        {
        title: "Lost Wristwatch",
        content: "Lost a black smartwatch near gym changing room. Battery dead.",
        name: "Yash Jindal",
        category: "Lost"
        },
        {
        title: "Found Earphones",
        content: "White wired earphones found in Seminar Hall 2, row 3.",
        name: "Ritika Sinha",
        category: "Found"
        }
)};

logData();


  