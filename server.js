const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhooks/azure-ad-users", (req, res) => {
    if (req.body && req.body.validationToken) {
        console.log("Validation request received:", req.body.validationToken);
        return res.status(200).send(req.body.validationToken);  // 🔴 Important: Send back plain text token
    }

    // Handle actual user created events
    console.log("Received Azure AD Webhook:", JSON.stringify(req.body, null, 2));
    res.sendStatus(202);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
