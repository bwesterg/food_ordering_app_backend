import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

//if a request comes to backend that says /api/my/user, then this handler is called...
router.post("/", jwtCheck, MyUserController.createCurrentUser);
//...which passes the request on to MyUserController, which handles the business logic,
//and passed to the createCurrentUser function
router.put(
  "/", 
  jwtCheck, 
  jwtParse, 
  validateMyUserRequest, 
  MyUserController.updateCurrentUser
);

export default router;