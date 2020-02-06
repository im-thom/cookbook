const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.get_recipes = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    try {
      // Create a snapshot with the entire recipes collection
      const snapshot = await db.collection("recipes").get();
      // Empyt array to hold recipes
      const recipes = [];
      // Loop through each document and push data to the empty recipes array
      snapshot.forEach(recipe => {
        // Create a new recipe and push all data to it
        newRecipe = recipe.data();
        // Adding a property of id, passing down the id of the database document
        newRecipe.id = recipe.id
        // Push newly constructed recipe to the recipes array
        recipes.push(newRecipe);
      });
      // Send the recipes array in a response object
      res.send(recipes);
    } catch (error) {
      res.send(error);
    }
  }
});

// cors(async (req, res) => {

// })

exports.create_new_recipe = functions.https.onRequest(async (req, res) => {
  try {
    let setDoc = await db.collection("recipes").add({
      name: req.body.name
    });
    res.send(`Successfully added ${req.body.name} to database.`);
  } catch (error) {
    res.send(`Unable to add ${req.body.name} to database: ${error}`);
  }
});
