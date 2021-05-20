import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { RecipeResolver } from "./resolvers/Recipe";
const PORT = process.env.PORT || 3001;

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  // Setup apollo server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RecipeResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.get("/api", (_, res) => {
    console.log("Thanks for visiting our api");
    res.send("Heres something for your troubles...");
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} bing bong`);
  });
};

main();
