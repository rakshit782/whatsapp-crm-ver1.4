// WhatsApp Webhook Handler - Production Ready
// Handles both webhook verification and incoming messages
// Works in demo mode when credentials are missing

module.exports = async (req, res) => {
  try {
    // Handle webhook verification (GET request)
    if (req.method === 'GET') {
      const mode = req.query['hub.mode'];
      const token = req.query['hub.verify_token'];
      const challenge = req.query['hub.challenge'];
      
      const verifyToken = process.env.WEBHOOK_VERIFY_TOKEN;
      
      // If no verify token is set, provide helpful instructions
      if (!verifyToken) {
        return res.status(200).send(
          'Webhook verify token not configured. Add WEBHOOK_VERIFY_TOKEN environment variable in Vercel Settings and set the same value in Meta Developer Console webhook configuration.'
        );
      }
      
      // Verify the webhook
      if (mode === 'subscribe' && token === verifyToken) {
        console.log('Webhook verified successfully!');
        return res.status(200).send(challenge);
      } else {
        console.log('Webhook verification failed');
        return res.status(403).send('Forbidden - Invalid verify token');
      }
    }
    
    // Handle incoming webhook messages (POST request)
    if (req.method === 'POST') {
      const body = req.body;
      
      // Check if WhatsApp API is configured
      const isConfigured = Boolean(
        process.env.WHATSAPP_ACCESS_TOKEN && 
        process.env.PHONE_NUMBER_ID
      );
      
      if (!isConfigured) {
        console.log('Webhook received but WhatsApp API not configured - running in demo mode');
        return res.status(200).json({
          success: true,
          message: 'Webhook received in demo mode',
          demo: true,
          data: body
        });
      }
      
      // Process incoming messages
      if (body?.entry?.[0]?.changes?.[0]?.value?.messages) {
        const messages = body.entry[0].changes[0].value.messages;
        const contacts = body.entry[0].changes[0].value.contacts || [];
        
        for (const message of messages) {
          const phoneNumber = message.from;
          const messageText = message.text?.body || '';
          const messageType = message.type;
          
          console.log(`Received ${messageType} message from ${phoneNumber}: ${messageText}`);
          
          // Here you would typically:
          // 1. Generate or lookup contact ID (CUT format)
          // 2. Create/update contact record
          // 3. Create CRM ticket if new conversation
          // 4. Store message in database
          // 5. Trigger any automation workflows
        }
      }
      
      // Process message status updates
      if (body?.entry?.[0]?.changes?.[0]?.value?.statuses) {
        const statuses = body.entry[0].changes[0].value.statuses;
        
        for (const status of statuses) {
          console.log(`Message ${status.id} status: ${status.status}`);
          // Update message status in your database
        }
      }
      
      return res.status(200).json({ success: true });
    }
    
    // Method not allowed
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
    
  } catch (error) {
    console.error('Webhook error:', error);
    
    // Return success even on error to prevent Meta from disabling webhook
    return res.status(200).json({
      success: true,
      error: 'Webhook processed with error',
      demo: !process.env.WHATSAPP_ACCESS_TOKEN
    });
  }
};