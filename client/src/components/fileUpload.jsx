import { useState } from "react";

function FileUpload(){
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = async () => {
        const formData = new FormData()
        formData.append("file", file)

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            })

            if (!response.ok) {
                throw new Error("Failed to upload file")
            }

            const result = await response.json()
            console.log("File uploaded", result)
            alert("File uploaded successfully!")
            } catch (error) {
                console.error("Error uploading file", error)
                alert("Failed to upload file")
            }
        }

        return(
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        )
    }
    export default FileUpload
