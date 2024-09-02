import mongoose from "mongoose"

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection
        connection.on('connected',()=>{
            console.log("MongoDB connected!")
        })

        connection.on('error',(err)=>{
            console.log("MongoDB connection error")
            console.log(err)
            process.exit(1)
        })
    }
    catch(err){
        console.log("Something went wrong in connecting the database")
        console.log(err)
    }
}