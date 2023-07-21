const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(`mongodb+srv://fmkdev:fmk120697@cluster0.fuv07sm.mongodb.net/?retryWrites=true&w=majority`, {
          
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;