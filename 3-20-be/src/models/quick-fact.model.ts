import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let quick_fact_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fact: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
};

let model_options: ModelOptions = <any>{
  indexes: [],
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export const QuickFact = sequelize.define("quick_facts", quick_fact_model, model_options);