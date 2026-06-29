import connectDB from "@/db/connectdb";
import User from "@/models/user.model";
import { UserSearch } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {   
        await connectDB();
         const {email}=await req.json();    
        const findOneUser=await User.findOne({email})
        if(!findOneUser){
            return NextResponse.json({msg:"user is not find"},{status:404})
        }
        return NextResponse.json({msg:"user is find",findOneUser},{status:200})
    } catch (error) {
        return NextResponse.json({msg:"Internal Error"},{status:500})
    }
    
}