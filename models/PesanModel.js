import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Pesan = db.define(
  "pesan",
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
// userId: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   validate: {
//     notEmpty: true,
//   },
// },
// Users.hasMany(Pesan);
// Pesan.belongsTo(Users, { foreignKey: "userId" });

export default Pesan;
