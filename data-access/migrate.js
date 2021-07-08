const { migrate } = require("postgres-migrations");

const runMigrations = async () => {
  const dbConfig = {
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
    host: "localhost",
    port: 5432,
  };

  await migrate(dbConfig, "data-access/database-migrations/");
};

runMigrations();
