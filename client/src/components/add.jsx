import { useState } from "react"

function Add(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [position, setPosition] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newEmployee = {
            name,
            email,
            position,
            photoURL
        }

        try {
            const response = await fetch("http://localhost:5000/employee", {
                method: "POST",
                headers: {
                    "Contet-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            })

            if (!response.ok) {
                throw new Error("Failed to add employee")
            }

            const result = await response.json()
            console.log("Employee addded", result)
            alert("Employee added successfully!")
        } catch (error) {
            console.error("Error adding employee", error)
            alert("Failed to add employee")
        }
    }
    
    return(
      <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br></br>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>

            <label htmlFor="email">Email</label><br></br>
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>

            <label htmlFor="position">Position</label><br></br>
            <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} /><br></br>

            <button type="submit">Add Employee</button>
        </form>
      </div>
    )
}
export default Add