import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import {NextRequest, NextResponse} from "next/server"
import { getDataFromToken } from "@/heplers/getDataFromToken"

connect()

export async function POST(request: NextRequest){
    //extract data from token

    const userId=await getDataFromToken(request)
    const user=await User.findOne({_id:userId}).select("-password")

    //check if there is no user
    if(!user){
        return NextResponse.json({message:"User not found"},{status:400})
    }

    return NextResponse.json({
        message:"User found",
        data:user
    })
}