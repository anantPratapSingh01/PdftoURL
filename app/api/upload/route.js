import connectDB from "@/db/connectdb";
import User from "@/models/user.model";
import { Client, Storage, ID, InputFile } from "node-appwrite";
import { NextResponse } from "next/server";


const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const storage = new Storage(client);

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.formData();

        const email = data.get("email");
        const pdf = data.get("pdf");
        console.log(email, pdf)

        const userExist = await User.findOne({ email })

        if (!userExist) {
            return NextResponse.json({ msg: "User Not Found" }, { status: 404 });
        }
        if (!pdf) {
            return NextResponse.json(
                { msg: "No PDF uploaded" },
                { status: 400 }
            );
        }
        if (pdf.type !== "application/pdf") {
            return NextResponse.json(
                { msg: "Only PDF files are allowed" },
                { status: 400 }
            );
        }

        // const arrayBuffer = await pdf.arrayBuffer();
        // const buffer = Buffer.from(arrayBuffer);

        const uploadedFile = await storage.createFile(
            process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
            ID.unique(),
            // InputFile.fromBuffer(buffer, pdf.name)
            pdf
        );


        const pdfUrl =
            client.config.endpoint +
            "/storage/buckets/" +
            process.env.NEXT_PUBLIC_APPWRITE_BUCKET +
            "/files/" +
            uploadedFile.$id +
            "/view?project=" +
            client.config.project;

        if (!pdfUrl) {
            return NextResponse.json({ msg: "pdfUrl Not Found" }, { status: 404 });
        }

        const setpdf = await User.updateOne(
            { email },
            { $push: { url: pdfUrl } }
        );
        if (setpdf.modifiedCount === 0) {
            return NextResponse.json(
                { msg: "PDF not stored" },
                { status: 400 }
            );
        }

        return NextResponse.json({ msg: "pdf upload", pdfUrl });







    } catch (error) {
        return NextResponse.json({ msg: "internal error" }, { status: 500 })
    }

}