const mongoose = require("mongoose");
const PostNotice = require("../models/post-notice");
require("dotenv").config({ path: __dirname + "/../.env" });


async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    }catch(err){
        console.log(err);
    }
}

main().catch((err)=>{console.log(err)});

let logData = async () => {
    await PostNotice.deleteMany({});

    await PostNotice.create([
        {
            title: "Annual Sports Meet",
            content: `
            We are thrilled to announce that the much-awaited Annual Sports Meet is scheduled to take place on the school grounds from 10th to 12th August 2025. This year, we are introducing a wide range of sports events, exciting competitions, and fun activities that aim to encourage maximum participation and foster a spirit of teamwork and sportsmanship among students.

            The event is open to students from all grades, and we highly encourage everyone to participate, whether as competitors, volunteers, or enthusiastic spectators. This year's theme is "Fitness, Fun & Friendship", and we promise a vibrant and energetic atmosphere throughout the meet.

            🏃‍♂️ Events Included:
            1. 100m, 200m, 400m races (Boys & Girls)
            2. Relay races – 4x100m and 4x400m
            3. Long Jump and High Jump
            4. Shot Put and Javelin Throw
            5. Football Tournament (Inter-House)
            6. Tug of War (Boys, Girls, and Staff teams)
            7. Kho-Kho and Kabaddi
            8. Sack Race, Spoon Race (Juniors)
            9. Badminton and Table Tennis (Indoor Events)

            📅 Date & Time:
            - **Date**: 10th–12th August 2025
            - **Time**: 8:30 AM – 4:00 PM each day
            - **Venue**: Main School Ground, Indoor Sports Complex

            🎽 Dress Code:
            - Participants must wear appropriate sports attire.
            - House colors will be strictly followed during inter-house events.
            - Track shoes are mandatory for all track events.

            🧃 Refreshments:
            - Water stations will be available across the ground.
            - Juice and energy drinks will be provided to all participants.
            - The school canteen will remain open with a special sports week menu.

            🎖️ Prizes & Recognition:
            - Trophies for House Champions and Individual Champions (Boys & Girls)
            - Medals and certificates for 1st, 2nd, and 3rd positions
            - Special recognition for Best Athlete (Junior and Senior)
            - Participation certificates for all players

            📋 Registration:
            - Interested students must register with their Sports Coordinators by **5th August 2025**.
            - Medical clearance is required for participation in long-distance events.

            🚑 Medical Assistance:
            - First aid and ambulance services will be available on-site throughout the event.

            👨‍🏫 Volunteers Needed:
            - Students of Grade 11 & 12 can volunteer to manage logistics, scorekeeping, and announcements.
            - Certificates of appreciation will be awarded to all volunteers.

            🌟 Guest Appearance:
            We’re honored to announce that **Mr. Rajeev Sharma**, an ex-national sprinter and alumnus of our school, will inaugurate the Sports Meet and motivate students with his experiences.

            Please ensure maximum participation and support to make this event a grand success!

            For any queries, reach out to:
            - **Mr. Rahul Verma** (Sports Incharge) – +91-9876543210
            - **Email**: sports.committee@schoolmail.com

            Let's unite in the spirit of sportsmanship and make this Annual Sports Meet a memorable one!
            `.trim(),
            name: "Rahul Verma",
            category: "Sports",
            date: new Date("2025-08-10")
            },
            {
            title: "Blood Donation Camp",
            content: `
            📢 Attention All Students, Faculty, and Community Members,

            We are pleased to inform you that the Health Club of our institution is organizing a **Blood Donation Camp** in association with **Red Cross Society** and **City Hospital**, to contribute towards saving lives and supporting emergency healthcare services in our area.

            🩸 Why Donate Blood?
            Every 2 seconds, someone needs blood. A single donation can save up to three lives. Donating blood is a noble act of kindness, and by participating in this camp, you’re helping those battling life-threatening conditions including cancer, accidents, surgeries, and chronic illnesses.

            🗓 Date: **5th August 2025 (Tuesday)**
            🕘 Time: **9:00 AM to 4:00 PM**
            📍 Venue: **Auditorium Hall, Block B**

            💉 Eligibility Criteria:
            - Age: 18–60 years
            - Weight: Minimum 50 kg
            - Haemoglobin: At least 12.5 g/dL
            - Must be in good health (No cold/fever in last 72 hours)
            - Should not have donated blood in the last 3 months
            - No recent history of alcohol/drug use or communicable diseases

            ❌ Not Eligible If:
            - You have a chronic illness or uncontrolled hypertension
            - You’ve had major surgery in the past 6 months
            - You’re pregnant or recently gave birth
            - You’ve tested positive for HIV, Hepatitis B/C, etc.

            📄 What to Bring:
            - Valid Government ID (Aadhar Card, College ID, etc.)
            - Recent medical prescription if applicable
            - Signed consent form (available on-site)

            🍎 Refreshments & Care:
            - Light snacks, juice, and glucose biscuits will be provided post-donation
            - Rest area and hydration support
            - Medical staff and ambulance stationed throughout the day

            🧑‍⚕️ Safety Protocols:
            - All equipment is sterile and single-use only
            - Donor area sanitized regularly
            - Masks, gloves, and sanitizers will be provided
            - On-spot screening and counseling before donation

            🏆 Recognition:
            - Digital Certificate from Red Cross Society
            - Donor Badge and Thank You Card
            - Volunteer hours credited for students (up to 4 hrs)

            📌 Additional Activities:
            - Free BMI and BP checkups
            - Health Q&A Booths with on-site doctors
            - Awareness Posters and Blood Donation Trivia

            🙏 Volunteers Wanted:
            - Help in registration, donor management, and guiding participants
            - Must report at 8 AM on the day of the camp
            - Register with Dr. Neha Sharma (Room No. 204)

            For any doubts or to pre-register, contact:
            - **Dr. Neha Sharma** (Health Club Coordinator)
            - 📞 Phone: +91-9876567890
            - 📧 Email: healthclub@institution.edu

            Let’s join hands to make this event successful and bring a meaningful impact to our community. Be a real-life hero. Donate Blood. Save Lives.

            "Your blood can give someone another chance at life. A few minutes for you — a lifetime for them."
            `.trim(),
            name: "Dr. Neha Sharma",
            category: "Health",
            date: new Date("2025-08-05")
            },
            {
            title: "Photography Workshop",
            content: "Join our free workshop on DSLR basics, lighting techniques, and beginner photo editing. Conducted by professionals from PixZoom Academy. Open to all students. Limited seats available. Register by 12th August.",
            name: "Anjali Mehta",
            category: "Workshop",
            date: new Date("2025-08-15")
            },
            {
            title: "Coding Hackathon",
            content: "Participate in our 24-hour inter-college coding hackathon on 12th August. Exciting problem statements, cash prizes, swag kits, and networking opportunities await! Registration closes on 5th August.",
            name: "Aditya Singh",
            category: "Technology",
            date: new Date("2025-08-12")
            },
            {
            title: "Independence Day Function",
            content: "Celebrate Independence Day with us on 15th August at 8:00 AM. Join for flag hoisting, cultural performances, and sweets distribution. Students must be in proper school uniform.",
            name: "Priya Rawat",
            category: "Cultural",
            date: new Date("2025-08-15")
            }
    ]
        
)};

logData();
