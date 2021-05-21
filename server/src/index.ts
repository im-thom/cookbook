import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { Recipe } from "./entities/Recipe";
import { RecipeResolver } from "./resolvers/Recipe";
import { createConnection } from "typeorm";
import path from "path";

const PORT = process.env.PORT || 3001;

(async () => {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Recipe],
  });

  // await connection.synchronize();

  const app = express();

  // Setup apollo server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RecipeResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.get("/api", (_, res) => {
    console.log("Thanks for visiting our api");
    res.send("Heres something for your troublesz...");
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} bing bong`);
  });
})();
