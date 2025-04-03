const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhooks/azure-ad-users", (req, res) => {
    console.log("Received webhook:", req.body);
    res.status(200).send("Webhook received");
});

// Export for Vercel
module.exports = app;
