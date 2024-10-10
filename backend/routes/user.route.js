import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload, logUpload } from "../middlewares/mutler.js";  // Import the log middleware

const router = express.Router();

router.route("/register")
  .post(singleUpload, logUpload, register);  // Add logUpload after singleUpload

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated, singleUpload, logUpload, updateProfile);

export default router;
