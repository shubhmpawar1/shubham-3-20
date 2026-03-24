import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { User } from "@src/models/user.model";
dotenv.config()

let DB_STRING: any = process.env.DB_STRING;

export const sequelize = new Sequelize(
  DB_STRING,
  {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    // logging: console.log,
    dialectOptions: {
      ssl:
        false
      // {
      //   require: true,
      //   rejectUnauthorized: false
      // },
    },
    hooks: {
      afterConnect: async (connection: any) => {
        // console.log('Database connected');
      },
    },
    pool: {
      max: 5, // Reduce max connections for cloud database
      min: 0,
      acquire: 30000, // Increase timeout (30 seconds)
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
    // await sequelize.sync({ alter: true, force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

setTimeout(async () => {
  await testConnection();
}, 4000);

console.log('Database configuration loaded');
