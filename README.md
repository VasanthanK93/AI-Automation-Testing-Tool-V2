
# Healthcare AI Autonomous QA Platform (Semantic Cache Version)

## Architecture

apps/
  healthcare-app       -> React Login App (Port 3000)
  qa-engine            -> AI QA Engine (Port 5000)
  executive-dashboard  -> Enterprise Dashboard (Port 3001)

---

# 1️⃣ Start Healthcare App

cd apps/healthcare-app
npm install
npm start

---

# 2️⃣ Start QA Engine

cd apps/qa-engine
npm install
npx playwright install

Ollama Setup:
ollama serve
ollama pull llama3
ollama pull nomic-embed-text

node server.js

---

# 3️⃣ Start Executive Dashboard

cd apps/executive-dashboard
npm install
npm start

---

# 4️⃣ Trigger AI Test

POST http://localhost:5000/run-ai-test

Body:
{
  "acceptanceCriteria": "User logs in and sees Patient Dashboard",
  "modelProvider": "ollama"
}

---

Features:

✔ Embedding-based semantic caching (cosine similarity)
✔ Drift detection (NONE / MINOR / MODERATE / MAJOR)
✔ Automatic self-healing re-execution
✔ Screenshot-based reasoning
✔ Ollama / Gemini toggle scaffold
✔ Executive dashboard metrics
