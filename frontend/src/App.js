import React from 'react';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';

function App() {
    return (
        <div>
            <h1>Cloud Storage System</h1>
            <FileUpload />
            <hr />
            <FileDownload />
        </div>
    );
}

export default App;
