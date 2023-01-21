import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pesan from "./PesanModel.js";

const { DataTypes } = Sequelize;

const Komen = db.define(
  "komentar",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);
Pesan.hasMany(Komen);

export default Komen;
