import { Sequelize } from "sequelize";

const db = new Sequelize(
  "freedb_secret-chat",
  "freedb_secret-user",
  "AWpVpFE?VB82qSc",
  {
    dialect: "mysql",
    port: 3306,
  }
);

export default db;
