import React, { useState } from 'react';

const API_URL = "https://b037-2409-408d-517-5bf5-c65-d23c-a54c-f1bc.ngrok-free.app"; // Use ngrok URL

const FileDownload = () => {
    const [filename, setFilename] = useState("");

    const handleDownload = async () => {
        if (!filename) {
            alert("Please enter a filename.");
            return;
        }

        const downloadLink = `${API_URL}/download/${filename}`;

        // Open file download in a new tab
        window.open(downloadLink, "_blank");
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
