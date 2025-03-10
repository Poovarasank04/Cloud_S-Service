import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://052e-2409-40f4-14-d9e9-ec18-86ec-7681-a608.ngrok-free.app"; // Use ngrok URL

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
