import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";
import { Video } from "@src/models/video.model";

let favourite_video_model = {
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
    allowNull: false,
  },
};

let model_options: ModelOptions = <any>{
  // tableName: 'favourite_videos',
  // timestamps: true,
  indexes: [
    // {
    //     unique: true,
    //     fields: ['user_id', 'video_id'],
    //     name: 'unique_user_video_favourite',
    // },
  ],
};

export const FavouriteVideo = sequelize.define("FavouriteVideo", favourite_video_model, model_options);

// Association
FavouriteVideo.belongsTo(Video, { foreignKey: 'video_id', as: 'video' });