import mongoose  from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDb is connected 😀")

    }catch(err){
        console.log('Connection error', err);
    }
}

export default connectDB;