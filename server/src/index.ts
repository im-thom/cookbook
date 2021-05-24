import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { Recipe } from "./entities/Recipe";
import { RecipeResolver } from "./resolvers/Recipe";
import { createConnection } from "typeorm";
import path from "path";
import createRecipeLoader from "./loaders/Recipe";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { __prod__ } from "./constants";

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

  // Connect redis middleware before Apollo - ordering important
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);
  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client: redis, disableTouch: true }),
      // Hide this later...
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: "ergwergvere",
      resave: false,
    })
  );

  // Setup apollo server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RecipeResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      recipeLoader: createRecipeLoader(),
    }),
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
