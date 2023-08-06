import  express from "express";
import{ updateUser,getSingleUser,deleteUser,getAllUser} from '../controllers/userControlers.js'
const router =express.Router();
import { verifyUser,verifyAdmin } from "../utils/verifytoken.js";

//update user
router.put('/:id',verifyUser, updateUser);

//delete user
router.put('/:id',verifyUser,deleteUser);

// get single user
router.put('/:id',verifyUser,getSingleUser);

// get all users
router.put('/:id',verifyAdmin,getAllUser);

export default router;