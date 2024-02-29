import process from "node:process";
import pg, { DatabaseError } from "pg";
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { DB } from "./db.generated.js";

export type Database = Awaited<ReturnType<typeof createKysely>>;


export const createKysely = () => {
  const conn = new pg.Pool({
    connectionString: "postgres://postgres:postgres@localhost:5433/dev",
  });
  return new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: conn,
    }),
    plugins: [new CamelCasePlugin()],
  });
};
