const { request } = require("express");
const admin = require("firebase-admin");

const serviceAccount =  require()

admin,admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "task-17-node-js-and-firebase"
})

const db = admin.firestore();
const bucket = admin.storage().bucket()

module.exports = { db, bucket }