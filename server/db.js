/** Database connection for the string app */

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql:///dmi");

client.connect();

module.exports = client;