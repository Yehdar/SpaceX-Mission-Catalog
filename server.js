import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { RootQuery } from "./schema.js";

// Create a express instance serving all methods on `/graphql`
const app = express();
const PORT = 4000;

// GraphQL endpoint
app.use("/graphql", createHandler({ RootQuery, graphql: true }));

// GET endpoint to test if the server is running
app.get("/", (req, res) => {
  res.send("hollup... let him cook!");
});

app.listen(PORT, () => {
  console.log("Listening to port ${PORT}");
});
