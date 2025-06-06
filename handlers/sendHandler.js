// This file is no longer used in the Next.js project structure
// The functionality has been moved to /pages/api/v1/send.js
/**
 * Handler for the /send endpoint
 * Logs the received message and returns a 200 status code
 */
const sendHandler = (req, res) => {
  const message = req.body;
  
  console.log('Received message:', message);

  res.status(200).json({
    status: 'success',
    message: 'Message received successfully'
  });
};

module.exports = sendHandler;
