import express from "express";
import {
  getHeader,
  getHeaderById,
  createHeader,
  updateHeader,
  deleteHeader,
} from "../controller/Header.js";

const router = express.Router();

router.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
 });

router.get("/user_header", getHeader);
router.get("/user_header/:id", getHeaderById);
router.post("/user_header", createHeader);
router.patch("/user_header/:id", updateHeader);
router.delete("/user_header/:id", deleteHeader);

export default router;
