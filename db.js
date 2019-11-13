const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);
db.sync()
  .then(() => console.log("DB connected"))
  .catch(err => {
    console.log("DB Error...shutting down..." + err);
    process.exit(1);
  });
module.exports = db;
