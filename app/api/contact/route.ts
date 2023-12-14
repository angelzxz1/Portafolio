import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message: content } = await req.json();
        if (name === "" || email === "" || content === "")
            return new NextResponse("Bad Request", { status: 400 });
        const messageStatus = await db.message.create({
            data: {
                name,
                email,
                content,
            },
        });
        return NextResponse.json(messageStatus);
    } catch (error) {
        console.log("CONTACT_MESSAGE_ERROR: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
