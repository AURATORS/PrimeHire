import mongoose from "mongoose";
//connection
const connect = async () => {
    try {
        console.log("Attenmpting to connect db...");
        await mongoose.connect(process.env.MONGO_URI,{});
        //checking
        console.log("Conneted to Database..!");
    } catch (error) {
        console.log("Failed to connect to dbase",error.message);
        process.exit(1);
    }
};


export default connect;
