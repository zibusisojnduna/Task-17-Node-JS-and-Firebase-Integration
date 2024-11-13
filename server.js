const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { db, bucket} = require("./firebaseConfig")
const multer = require("multer")
const path = require("path")
const exp = require("constants")
const { error } = require("console")
const { rmSync } = require("fs")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.get("/", (req, res) => {
    res.send("Employee Management System API is online!")
})

app.listen(port, () => {
 console.log(`Server running on port ${port}`)
})

app.post("/employee", async (req, res) => {
    try{
        const { name, email, position, photoURL  } = req.body
        const newEmployee = {
            name,
            email,
            position,
            photoURL,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        }
        const docRef = await db.collection("employees").add(newEmployee)

        res.status(201).json({
            messsage: "Employee added successfully!",
            employeeId: docRef.id
        })
        } catch (error) {
            console.error("Error adding employee", error)
            res.status(500).json({ error: "Error adding employee"})
        }
    })

    app.get("employee/:id", async (req, res) => {
        const employeeId = req.params.id
        try {
            const employeeDoc = await db.collection("employees").doc(employeeId).get()

            if (!employeeDoc.exists) {
                return res.status(404).json({ error: "Employee not found"})
            }

            res.status(200).json(employeeDoc.data())
        } catch (error) {
            console.error("Error retrieving employee", error)
            res.status(500).json({ error: "Error retrieving employee"})
        }
    })

    app.put("/employee/:id", async (req, res) => {
        const employeeId = req.params.id
        const { name, email, position, photoURL  } = req.body

        try {
            const employeeRef = await db.collection("employees").doc(employeeId)

            const employee = await employeeRef.get()
            if (!employee.exists) {
                return res.status(404).json({ error: "Employee not found"})
            }

            await employeeRef.update({
                name,
                email,
                position,
                photoURL,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            })

            res.status(200).json({ messsage: "Employee updated successfully"})
        } catch (error) {
            console.error("Error updating employee", error)
            res.status(500).json({ error: "Error updating employee"})
        }
    })