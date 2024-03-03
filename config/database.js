import Sequelize from "sequelize";

const db = new Sequelize(
  "postgres://yumana:yumakeren@localhost:5432/hwrakamin"
);

export default db;
