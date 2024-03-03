import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const movies = db.define(
  'movies',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    genres: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    Sequelize,
    tableName: "movies",
    schema: "public",
    timestamps: false,
  }
);

export default movies;
