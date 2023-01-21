import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pesan from "./PublicPesanModel.js";

const { DataTypes } = Sequelize;

const PublicKomen = db.define(
  "komentar_public",
  {
    textKt: {
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

Pesan.hasMany(PublicKomen);
// PublicKomen.belongsTo(Pesan, { foreignKey: "idPesan_public" });

export default PublicKomen;
