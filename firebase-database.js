'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/recipes-2019-b6bb6-firebase-adminsdk-jnqec-bd8b224bf8.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipes-2019-b6bb6.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://recipes-app-388be.firebaseio.com");
module.exports = firebase;