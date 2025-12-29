import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let country_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
};

let model_options: ModelOptions = <any>{
  indexes: [],
};

export const Country = sequelize.define("country", country_model, model_options);