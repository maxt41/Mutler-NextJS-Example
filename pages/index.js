import axios from "axios"
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async (e) => {
    const file = e.target.files[0]
    setSelectedFile(file);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }



  return (
    <>
      <main>
        <input type="file" onChange={uploadFile} />
        <button onClick={handleUpload}>Upload</button>
      </main>
    </>
  )
}
