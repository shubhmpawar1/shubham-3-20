import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let video_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thumbnail_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Duration in minutes'
  },
};

let model_options: ModelOptions = <any>{
  tableName: 'videos',
  timestamps: true,
  indexes: [],
};

export const Video = sequelize.define("Video", video_model, model_options);