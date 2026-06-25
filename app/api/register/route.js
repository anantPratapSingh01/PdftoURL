import connectDB from '@/db/connectdb';
import User from '@/models/user.model.js';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectDB();
        const { name, email, password } = await req.json();
        if (!name || !email || !password) {
            return new NextResponse.json({message:"All fields are required"}, { status: 400 });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "Email already exists" },
                { status: 409 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 })
    } catch (error) {
        return new NextResponse("Server error", { status: 500 });
    }
}

            export async function GET(req) {
                try {
                    await connectDB()

                    const AllUser=await User.find({});

                    return  NextResponse.json({msg:"All use is find",AllUser},{status:200})
                } catch (error) {
                return  NextResponse.json({msg:"Internal error"},{status:500}) 
                }
            }