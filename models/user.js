const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/authtest");
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

connectToDB();

const userSchema = new mongoose.Schema({
   username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },age:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("UserModel", userSchema);
module.exports = userModel;
