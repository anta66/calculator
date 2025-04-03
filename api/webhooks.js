export default function handler(req, res) {
  if (req.method === "POST") {
      const body = req.body;

      // Handle validation token for webhook registration
      if (body && body.validationToken) {
          return res.status(200).send(body.validationToken);
      }

      // Process user created/deleted events
      console.log("Received Azure AD Webhook:", JSON.stringify(body, null, 2));

      return res.status(202).json({ message: "Webhook received" });
  }

  // Return 404 for other requests
  res.status(404).json({ error: "Not Found" });
}
