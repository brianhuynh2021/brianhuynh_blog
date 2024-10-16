import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (request) => {
    // fetch
    try {
        await connect()
        const posts = await Post.find()
        return NextResponse(posts, {status: 200})
    }
    catch (err) {
        return new NextResponse("Database Error", {status : 200})}
    }
    