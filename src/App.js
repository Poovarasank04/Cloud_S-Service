import React from 'react';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import './App.css';  // Importing the CSS file for styling

function App() {
    return (
        <div className="container">
            <h1 className="title">🚀 Cloud Storage System</h1>
            <div className="box">
                <FileUpload />
            </div>
            <hr />
            <div className="box">
                <FileDownload />
            </div>
        </div>
    );
}

export default App;
