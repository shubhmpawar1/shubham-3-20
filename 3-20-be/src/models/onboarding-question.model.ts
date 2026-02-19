import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";
import { OnboardingAnswer } from "./onboarding-answer.model";

let onboarding_question_model = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
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
  tableName: 'onboarding_questions',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  indexes: [],
};

export const OnboardingQuestion = sequelize.define("OnboardingQuestion", onboarding_question_model, model_options);

// Define associations
OnboardingQuestion.hasMany(OnboardingAnswer, {
  foreignKey: 'question_id',
  as: 'answers'
});

OnboardingAnswer.belongsTo(OnboardingQuestion, {
  foreignKey: 'question_id',
  as: 'question'
});
