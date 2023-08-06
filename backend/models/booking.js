import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
      required: true,
    },
    tourName:{
        type:String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookingAt:{
        type:Date,
        required:true
    }
  },
  { timestamps: true }
);

export default mongoose.model("booking", bookingSchema);
