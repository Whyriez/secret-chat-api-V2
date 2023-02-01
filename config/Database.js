import { Sequelize } from "sequelize";

// const db = new Sequelize(
//   "freedb_secret-chat",
//   "freedb_secret-user",
//   "AWpVpFE?VB82qSc",
//   {
//      host: "sql.freedb.tech",
//     dialect: "mysql",
//     port: 3306,
//   }
// );

const db = new Sequelize(
  "secret-chat",
  "a9627n062go85cg42n92",
  "pscale_pw_LIgY5s7TezAAbfmqQRHX59OwrCgdEDy56fNTD9LPS6C",
  {
    host: "ap-southeast.connect.psdb.cloud",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

export default db;
