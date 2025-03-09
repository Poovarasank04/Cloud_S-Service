import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    // Function to handle file upload
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    // Function to handle file upload
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("https://dd49-2409-4072-216-f0e5-c4de-1ce3-f5-b00.ngrok-free.app/upload", formData);
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
/upload", formData);
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
