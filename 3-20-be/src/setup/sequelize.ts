import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

let DB_STRING: any = "postgresql://db_3_20_way_db_user:j6XO2DHODTxfs93nOdbeYduB9fcEm9iJ@dpg-d5cdun6uk2gs73ftp87g-a.virginia-postgres.render.com/db_3_20_way_db";
//process.env.DB_STRING

export const sequelize = new Sequelize(
  DB_STRING,
  {
    dialect: "postgres",
    protocol: "postgres",
    // logging: false,
    logging: console.log,
    // dialectOptions: {
    //   // ssl: {
    //   //   // require: "true",
    //   // },
    // },
    hooks: {
      afterConnect: async (connection: any) => {
        // console.log('Database connected');
      },
    },
    pool: {
      max: 50, // Increase max connections
      min: 1,
      acquire: 20000, // Increase timeout (60 seconds)
      idle: 10000
    },
    retry: {
      max: 5 // Retry 5 times before throwing an error
    }
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true, force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

setTimeout(async () => {
  await testConnection();
}, 4000);

console.log('Database configuration loaded');