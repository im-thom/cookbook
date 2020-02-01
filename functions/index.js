const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.get_recipes = functions.https.onRequest(async (req, res) => {
    try {
        // Create a snapshot with the entire recipes collection
        const snapshot = await db.collection('recipes').get();
        // Empyt array to hold recipes
        const recipes = [];
        // Loop through each document and push data to the empty recipes array
        snapshot.forEach(recipe => {
            recipes.push(recipe.data())
        });
        // Send the recipes array in a response object
        res.send(recipes);

    } catch (error) {
        res.send(error)
    }
})

// exports.get_recipes = functions.firestore.database.collection('recipes').get()

// exports.get_all_recipes = functions.https.onCall( async (request, response) => {
//     try {
//         const recipes = await db.collection('recipes').get()
//         console.log(recipes)
//         response.send(recipes)
//     } catch (error) {
//         response.send(error)
//         return
//     }
// });
