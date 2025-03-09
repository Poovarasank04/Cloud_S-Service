import React, { useState } from 'react';
import axios from 'axios';

const FileDownload = () => {
    const [filename, setFilename] = useState("");

    const handleDownload = async () => {
        if (!filename) {
            alert("Enter a filename.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/download/${filename}`, {
                responseType: 'blob' // Important for downloading files
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            alert("Error downloading file. Check the filename and try again.");
        }
    };

    return (
        <div>
            <h2>Download a File</h2>
            <input
                type="text"
                placeholder="Enter filename"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
            />
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default FileDownload;
