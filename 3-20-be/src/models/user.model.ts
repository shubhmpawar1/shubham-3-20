import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";
import { check_unique_record } from "@config/common/check-unique-function";

let user_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  google_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apple_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  microsoft_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profile_picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

let model_options: ModelOptions = <any>{

  indexes: [
    // {
    //     unique: true,
    //     fields: ['Your Model_id', 'Your Model_name'], //your column name
    //     name: 'unique_name_per_Model', //your massage
    // },
  ],
  // timestamps: true,
};

export const User = sequelize.define("users", user_model, model_options);