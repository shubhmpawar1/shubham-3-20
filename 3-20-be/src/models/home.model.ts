import { DataTypes, ModelOptions } from "sequelize";
import { sequelize } from "@src/setup/sequelize";
import { Video } from "@src/models/video.model";
import { QuickFact } from "@src/models/quick-fact.model";

// Note: Home screen does not have its own DB table.
// It aggregates data from: videos, video_feedbacks, quick_facts tables.
// This file is kept for reference and future use if a dedicated home table is needed.

// Associations used in get-home-details API:
// Video    → video_feedbacks (via video_id)
// QuickFact → quick_facts table

export { Video, QuickFact };