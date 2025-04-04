export default function handler(req, res) {
  if (req.method === "GET") {
    const token = req.query.validationToken;
    if (token) {
      // Required for Azure webhook validation
      res.setHeader("Content-Type", "text/plain");
      return res.status(200).send(token);
    }
  }

  if (req.method === "POST") {
    // Handle notification here
    console.log("Webhook Notification Received:", req.body);
    return res.status(202).send("Accepted");
  }

  return res.status(405).send("Method Not Allowed");
}
