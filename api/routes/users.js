import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import express from "express";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

 const router=express.Router();

 /*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user ,You are logged in..")
 })

 router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
   res.send("hello user ,You are logged in and you can delete your account..")
})
 

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
   res.send("hello admin ,You are logged in and you can delete all accounts..")
})*/
 
 //update
//  router.put("/update/:id",verifyUser,updateUser);
 router.put("/update/:id",updateUser);

 //delete
//  router.delete("/:id",verifyUser,deleteUser);
 router.delete("/:id",deleteUser);

 //get
//  router.get("/:id",verifyUser,getUser);
 router.get("/:id",getUser);

 //get all
//  router.get("/",verifyAdmin,getUsers);
 router.get("/",getUsers);


 

 export default router