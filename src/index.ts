import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import bodyParser from "body-parser";
import { UserResolver } from "./UserResolver";

(async () => {
  const app = express();
  app.use(bodyParser.json());

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  let PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log("Server up and running at port:", PORT);
  });
})();
