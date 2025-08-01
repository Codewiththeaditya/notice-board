const mongoose = require("mongoose");
const UrgentNotice = require("../models/urgent-notice");

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
    UrgentNotice.deleteMany({});

    await UrgentNotice.create(
        {
        title: "Annual Sports Meet",
        content: "Join us for the Annual Sports Meet on the school grounds. Events include races, football, and tug of war.",
        name: "Rahul Verma",
        category: "Sports",
        date: new Date("2025-08-10")
        },
        {
        title: "Blood Donation Camp",
        content: "A blood donation camp is being organized by the Health Club. Donors must carry ID proof.",
        name: "Dr. Neha Sharma",
        category: "Health",
        date: new Date("2025-08-05")
        },
        {
        title: "Photography Workshop",
        content: "Join our free workshop on DSLR basics and photo editing techniques conducted by professionals.",
        name: "Anjali Mehta",
        category: "Workshop",
        date: new Date("2025-08-15")
        },
        {
        title: "Coding Hackathon",
        content: "Participate in the 24-hour coding hackathon. Team registration is open till 5th August.",
        name: "Aditya Singh",
        category: "Technology",
        date: new Date("2025-08-12")
        },
        {
        title: "Independence Day Function",
        content: "Celebrate Independence Day with cultural programs and flag hoisting at 8 AM sharp.",
        name: "Priya Rawat",
        category: "Cultural",
        date: new Date("2025-08-15")
        }
        
)};

logData();
