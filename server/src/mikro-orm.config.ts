import { MikroORM } from "@mikro-orm/core";
import { Recipe } from "./entities/Recipe";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Recipe],
  dbName: "recipe-builder",
  debug: true,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
