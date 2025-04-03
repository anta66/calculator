const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhooks/azure-ad-users", (req, res) => {
    if (req.body && req.body.validationToken) {
        // Respond with the validation token for verification
        return res.status(200).send(req.body.validationToken);
    }

    // Handle user created/deleted events
    console.log("Received Azure AD Webhook:", JSON.stringify(req.body, null, 2));
    res.sendStatus(202);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
