import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pesan from "./PesanModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Header = db.define(
  "header",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pertanyaan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
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

Pesan.hasMany(Header);

export default Header;
