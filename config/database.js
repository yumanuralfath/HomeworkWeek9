import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://yumana:yumakeren@localhost:5432/hwrakamin"
);

export default sequelize;
