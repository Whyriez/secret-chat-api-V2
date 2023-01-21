import express from "express";
import { Login, LogOut, Me } from "../controller/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", LogOut);

export default router;
