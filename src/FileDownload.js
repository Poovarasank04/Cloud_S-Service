import React, { useState } from 'react';

const API_URL = "https://052e-2409-40f4-14-d9e9-ec18-86ec-7681-a608.ngrok-free.app"; // Use ngrok URL

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
