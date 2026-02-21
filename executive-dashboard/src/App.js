import React, { useState } from "react";
import axios from "axios";

export default function App() {

  const [result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);

  const runTest = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/run-ai-test",
      {
        acceptanceCriteria:
          "User logs in successfully and sees Dashboard",
        modelProvider: "ollama"
      }
    );

    setResult(res.data);
  };

  const uploadDocument = async (e) => {

    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload-and-run",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setResult(res.data);

    } catch (err) {
      console.error(err);
    }

    setUploading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Executive AI QA Dashboard</h1>

      <button onClick={runTest}>
        Run Manual AI Test
      </button>

      <br /><br />

      <label>
        <strong>Upload Acceptance Criteria Document:</strong>
      </label>
      <br />

      <input
        type="file"
        accept=".docx"
        onChange={uploadDocument}
      />

      {uploading && <p>Processing document...</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Execution Summary</h3>

          {result.summary && (
            <>
              <p>Total: {result.summary.total}</p>
              <p>Passed: {result.summary.passed}</p>
              <p>Failed: {result.summary.failed}</p>
              <p>Healed: {result.summary.healed}</p>
            </>
          )}

          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}