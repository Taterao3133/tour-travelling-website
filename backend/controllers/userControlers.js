import User from "../models/User.js";

//create new user

export const createUser=async (req,res)=>{
    const newUser=new User(req.body)
    try{
        const savedUser =await newUser.save();
        res.status(200).json({
            success:true,
            message:'Successfully created',
            data: savedUser,
        });}
        catch(err){
            res
            .status(500)
            .json({success:false,message:'Failed to create. Try again'});

        }
};

//update user

export const updateUser= async (req,res)=>{
   const id = req.params.id;  
   try{
    const updatedUser= await User.findByIdAndDelete(id,
        {
            $set:req.body,

        },
        {
            new:true
        }
        
        );
        res.status(200).json({
            success:true,
            message:'Successfully updated',
            data: updateUser,
        });
     }
     catch(err){
        res.status(500).json({
            success:false,
            message:'failed to update'
        });
     }
};

// delete user

export const deleteUser= async (req,res)=>{
    const id = req.params.id;  
    try{
     const deletedUser= await User.findByIdAndDelete(id)
        
         res.status(200).json({
             success:true,
             message:'Successfully deleted',
             data: deletedUser,
         });
      }
      catch(err){
         res.status(500).json({
             success:false,
             message:'failed to delete'
         });
      }
 };

//getsingle user

export const getSingleUser= async (req,res)=>{
    const id = req.params.id;  
    try{
     const user= await User.findByIdAndDelete(id)
        
         res.status(200).json({
             success:true,
             message:'Successfully got one user',
             data: user,
         });
      }
      catch(err){
         res.status(500).json({
             success:false,
             message:'failed to geting singleUser'
         });
      }
 };

 //getall users

export const getAllUser= async (req,res)=>{
    const id = req.params.id;  
    try{ 
     const getUsers= await User.findByIdAndDelete()
        
         res.status(200).json({
             success:true,
             message:'Successfully got all users',
             data:getUsers,
         });
      }
      catch(err){
         res.status(500).json({
             success:false,
             message:'failed to get all users'
         });
      }
 };




