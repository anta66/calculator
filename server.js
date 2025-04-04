const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhooks/azure-ad-users", (req, res) => {
    if (req.query && req.query.validationToken) {
        // ✅ Respond with the validation token as plain text (Microsoft expects this)
        return res.status(200).send(req.query.validationToken);
    }

    // 🔁 Handle normal notifications (user created, deleted, etc.)
    console.log("Received Azure AD Webhook:", JSON.stringify(req.body, null, 2));
    res.sendStatus(202);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
