import express from "express";
import {
  getPesan,
  getPesanById,
  createPesan,
  updatePesan,
  deletePesan,
  deletePesanByid,
  getPesanDById,
  createKomen,
  getKomentarById,
  getKomentarByIdAs,
  getKomentar,
  deleteKomenid,
  deleteKomenUid,
} from "../controller/Pesan.js";

const router = express.Router();

router.get("/pesan-saya", getPesan);
router.get("/pesan-saya/:id", getPesanById);
router.get("/pesan-sayaid/:id", getPesanDById);
router.post("/pesan-saya", createPesan);
router.patch("/pesan-saya/:id", updatePesan);
router.delete("/pesan-saya/:id", deletePesan);
router.delete("/pesan-sayaid/:id", deletePesanByid);

// router.post("/komentar-pesan/:id", createKomen);
router.post("/komentar-pesan/", createKomen);
router.get("/komentar-pesan/:id", getKomentarById);
router.get("/komentar-pesanid/:id", getKomentarByIdAs);
router.get("/komentar-pesan", getKomentar);
router.delete("/komentar-pesan/:id", deleteKomenUid);
router.delete("/komentar-pesanid/:id", deleteKomenid);

export default router;
