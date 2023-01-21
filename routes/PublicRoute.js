import express from "express";
import {
  getTanggapan,
  getTanggapanById,
  createTanggapan,
  updateTanggapan,
  deleteTanggapan,
  createKomenTanggapan,
  createKomenTanggapanByid,
  getKomentarTanggapanById,
  getKomentarTanggapan,
} from "../controller/Public.js";

const router = express.Router();

router.get("/tanggapan", getTanggapan);
router.get("/tanggapan/:id", getTanggapanById);
router.post("/tanggapan", createTanggapan);
router.patch("/tanggapan/:id", updateTanggapan);
router.delete("/tanggapan/:id", deleteTanggapan);

router.post("/komentar-tanggapan/:id", createKomenTanggapanByid);
router.post("/komentar-tanggapan", createKomenTanggapan);
router.get("/komentar-tanggapan/:id", getKomentarTanggapanById);
// router.get("/komentar-tanggapan/:id", getKomentarTanggapanJoin);
router.get("/komentar-tanggapan", getKomentarTanggapan);

export default router;
