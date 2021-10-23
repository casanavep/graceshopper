const { Client } = require("pg");
require("dotenv").config();

const client = new Client(
  process.env.DATABASE_URL || {
    user: "postgres",
    password: process.env.PASSWORD,
    database: "graceshopper",
    port: 3000,
  }
);
client.connect();
module.exports = client;
