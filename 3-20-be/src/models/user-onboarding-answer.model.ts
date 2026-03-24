import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";
import { User } from "./user.model";

let user_onboarding_answer_model = {
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
  answers: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: '{ "question_id": [answer_id, answer_id], ... }'
  },
};

let model_options: ModelOptions = <any>{
  tableName: 'user_onboarding_answers',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id'],
      name: 'unique_user_onboarding_answer',
    }
  ],
};

export const UserOnboardingAnswer = sequelize.define("UserOnboardingAnswer", user_onboarding_answer_model, model_options);

// Associations
UserOnboardingAnswer.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

User.hasOne(UserOnboardingAnswer, {
  foreignKey: 'user_id',
  as: 'onboarding_answers'
});