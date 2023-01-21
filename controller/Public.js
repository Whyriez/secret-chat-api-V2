import Pesan from "../models/PublicPesanModel.js";
import Komen from "../models/PublicKomenModel.js";

export const getTanggapan = async (req, res) => {
  try {
    const response = await await Pesan.findAll({
      order: [["id", "desc"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTanggapanById = async (req, res) => {
  try {
    const response = await Pesan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTanggapan = async (req, res) => {
  try {
    await Pesan.create(req.body);
    res.status(201).json({ msg: "Pesan Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTanggapan = async (req, res) => {
  try {
    await Pesan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTanggapan = async (req, res) => {
  try {
    await Pesan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const createKomenTanggapan = async (req, res) => {
  try {
    await Komen.create(req.body);
    res.status(201).json({ msg: "Komentar Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const createKomenTanggapanByid = async (req, res) => {
  try {
    await Komen.create(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Komentar Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getKomentarTanggapan = async (req, res) => {
  try {
    const response = await Komen.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKomentarTanggapanById = async (req, res) => {
  try {
    const response = await Komen.findAll({
      where: {
        pesanPublicId: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
