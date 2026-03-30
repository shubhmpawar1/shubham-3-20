import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let user_video_history_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    comment: 'The user who watched the video'
  },
  video_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'videos',
      key: 'id'
    },
    comment: 'The video that was watched'
  },
  session_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'sessions',
      key: 'id'
    },
    comment: 'The session this video belongs to. NULL if watched individually.'
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'completed',
    comment: 'completed | skipped | in_progress'
  },
};

let model_options: ModelOptions = <any>{
  tableName: 'user_video_history',
  timestamps: true,
  indexes: [],
};

export const UserVideoHistory = sequelize.define("UserVideoHistory", user_video_history_model, model_options);