import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://b037-2409-408d-517-5bf5-c65-d23c-a54c-f1bc.ngrok-free.app"; // Use ngrok URL

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(`${API_URL}/upload`, formData);
            alert(response.data.message);
        } catch (error) {
            alert("Error uploading file. Please try again.");
        }
    };

    return (
        <div>
            <h2>Upload a File</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
