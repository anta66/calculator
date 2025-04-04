const express = require("express");
const app = express();

app.use(express.json());

// Webhook validation (GET)
app.get("/webhooks/azure-ad-users", (req, res) => {
  const validationToken = req.query.validationToken;
  if (validationToken) {
    console.log("Validation token received:", validationToken);
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(validationToken);
  }
  res.status(400).send("Missing validationToken");
});

// Webhook notification (POST)
app.post("/webhooks/azure-ad-users", (req, res) => {
  console.log("🔔 Webhook POST received!");
  console.log("Webhook Notification Received:", req.body);
  console.log("Webhook Notification Received:", res);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(202).send("Accepted");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Legacy server listening on port ${port}`);
});
