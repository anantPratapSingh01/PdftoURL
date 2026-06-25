import connectDB from "@/db/connectdb.js";
import { NextResponse } from "next/server";
import Contact from "@/models/contact.model.js";

export async function POST(req) {
    try{
        await connectDB();
        const {name,email,subject,msg}=await req.json();
        const contact= await Contact.create({name,email,subject,msg});
        return NextResponse.json({success:true, message:"Message sent successfully!"},{status:200});
        

    }
    catch(error){
        console.log(error);
        return NextResponse.json({success:false, message:"Server error"},{status:500});
    }
}