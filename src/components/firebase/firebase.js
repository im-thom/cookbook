import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import React, { Component } from "react";

const config = {
  apiKey: "AIzaSyASb4yZ0JY3CLvlkONZI7k3CzvcVNr8PN0",
  authDomain: "cookbook-f485f.firebaseapp.com",
  databaseURL: "https://cookbook-f485f.firebaseio.com",
  projectId: "cookbook-f485f",
  storageBucket: "cookbook-f485f.appspot.com",
  messagingSenderId: "910034597723",
  appId: "1:910034597723:web:41b79fe114974e5c80cc7e"
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
