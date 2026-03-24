import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let video_feedback_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
  },
  video_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  session_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  adjustments: {
    type: DataTypes.ARRAY(DataTypes.STRING),
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
};

export const VideoFeedback = sequelize.define("video_feedbacks", video_feedback_model, model_options);
