/**
 * API handler for the /api/v1/send endpoint
 * Logs the received message and returns a 200 status code
 */
export default function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get the message from the request body
  const message = req.body;
  
  // Log the received message
  console.log('Received message:', message);
  
  // Send a 200 OK response
  res.status(200).json({
    status: 'success',
    message: 'Message received successfully'
  });
}
