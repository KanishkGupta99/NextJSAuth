import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import {request} from "http"

export const getDataFromToken=(request:NextRequest)=>{
    try{
        //take token from cookies
        const token=request.cookies.get("token")?.value || ""

        //verify token
        const decodedToken:any=jwt.verify(token,process.env.TOKEN_SECRET!)

        //return its id
        return decodedToken.id
    }
    catch(error:any){
        throw new Error(error.message)
    }
}