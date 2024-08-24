import Clubs from "../models/club.model.js";

export const createClub=async(req,res,next)=>{
    try{
        const listing=await Clubs.create(req.body);
        return res.status(201).json(listing);
    }
    catch(error)
    {
        next(error);
    }
}


export const listClubs=async(req,res,next)=>{
    try{
        const data=await Clubs.find();
        res.status(200).json(data);
    }
    catch(error)
    {
        next(error);
    }
}