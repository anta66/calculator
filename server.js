const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhooks/azure-ad-users", (req, res) => {
    console.log("Received request:", req.headers, req.body);
    
    if (req.body && req.body.validationToken) {
        return res.status(200).send(req.body.validationToken);
    }

    res.sendStatus(202);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
