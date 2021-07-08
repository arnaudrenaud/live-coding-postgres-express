const dotenv = require("dotenv");
const { migrate } = require("postgres-migrations");

dotenv.config();

const runMigrations = async () => {
  const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

  const dbConfig = {
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: +PGPORT,
  };

  await migrate(dbConfig, "data-access/database-migrations/");
};

runMigrations();
