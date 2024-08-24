import mongoose from "mongoose";

const clubSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        members:{
            type:Number,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        registered:{
            type:Boolean,
            required:true
        }
    },
    {timestamps:true}
);

const Clubs=mongoose.model("Clubs",clubSchema);
export default Clubs;