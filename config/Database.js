import { Sequelize } from "sequelize";

const db = new Sequelize(
  "freedb_secret-chat",
  "freedb_secret-user",
  "AWpVpFE?VB82qSc",
  {
    host: "sql.freedb.tech",
    dialect: "mysql",
  }
);

export default db;
