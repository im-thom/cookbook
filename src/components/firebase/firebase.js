import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import React, { Component } from "react";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

class Firebase {
  constructor() {
    //   console.log(`App init: ${this.auth.settings.databaseURL}`)
    app.initializeApp(config);
    this.auth = app.auth();
    console.log("INITIALISING AUTH", this.auth);
  }

  // Auth API
  
  create_user_with_email_and_password = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  sign_in_with_email_and_password = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  
  sign_out = () => {
    this.auth.signOut();
  };

  reset_password = email => this.auth.sendPasswordResetEmail(email);

  update_password = password => {
    this.auth.currentUser.updatePassword(password);
  };
}

export default Firebase;
