const express = require("express");
const { runAITest } = require("../orchestrator/test.orchestrator");
const multer = require("multer");
const path = require("path");
const { extractAcceptanceCriteria } =
  require("../input-context/doc.ingestion");
  
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/run-ai-test", async (req, res) => {
  try {
    const result = await runAITest(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post(
  "/upload-and-run",
  upload.single("file"),
  async (req, res) => {

    try {

      const filePath =
        path.resolve(req.file.path);

      const rawAC =
        await extractAcceptanceCriteria(filePath);

      const result =
        await runAITest({
          acceptanceCriteria: rawAC
        });

      res.json(result);

    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  }
);

module.exports = router;