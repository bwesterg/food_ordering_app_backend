import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

//if a request comes to backend that says /api/my/user, then this handler is called...
router.post("/", jwtCheck, MyUserController.createCurrentUser)
//...which passes the request on to MyUserController, which handles the business logic,
//and passed to the createCurrentUser function

export default router;