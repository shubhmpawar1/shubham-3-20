import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";

let onboarding_answer_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "onboarding_questions",
            key: "id",
        },
        allowNull: false,
    },
    answer_text: {
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
    tableName: 'onboarding_answers',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    indexes: [],
};

export const OnboardingAnswer = sequelize.define("OnboardingAnswer", onboarding_answer_model, model_options);