const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Initialise firebase app
admin.initializeApp(functions.config().firebase);

// Init express server
const app = express();
const main = express();

// Add a path to recieve the request and set json body parser to process the body

// app.use();

main.use(cors({ origin: true }));
main.use("/v1", app);
main.use(bodyParser.json());

// init firebase database
const db = admin.firestore();

/** COLLECTIONS **/
const userCollection = "users";
const recipeCollection = "recipes";

// interface Recipe {
//   name: String;
//   cuisine: String;
//   tags: [String];
//   rating: Number;
//   skill: String;
// }


app.post("/recipes", async (req, res) => {
  try {
    const recipe = {
      name: req.body["name"],
      cuisine: req.body["cuisine"],
      tags: req.body["tags"],
      rating: req.body["rating"],
      skill: req.body["skill"],
    };

    const newDoc = await db.collection(recipeCollection).add(recipe);
    res.status(201).send(`Created new recipe: ${newDoc.id}`);
  } catch (error) {
    res.status(400).send(`Error creating recipe...`);
  }
});

app.get("/recipes", async (req, res) => {
  try {
    const recipeSnapshot = await db.collection(recipeCollection).get();
    const recipes = [];

    recipeSnapshot.forEach((doc) => {
      recipes.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).send(error);
  }
});

const api = functions.https.onRequest(main);

module.exports = {
  api,
};
