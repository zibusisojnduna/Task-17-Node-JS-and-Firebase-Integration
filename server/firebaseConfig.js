// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./task-17-node-js-and-firebase-firebase-adminsdk-2uf9u-7555bfe7ca.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'task-17-node-js-and-firebase-intergration.appspot.com'
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
