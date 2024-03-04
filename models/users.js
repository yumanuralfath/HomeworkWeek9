import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    Sequelize,
    tableName: "users",
    schema: "public",
    timestamps: false,
  }
);

export default users;
