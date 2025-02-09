import express, { Request, Response } from 'express';
import { chatBot, callAgent } from './chatbot';

chatBot().then(({ agent, config }) => {
    const app = express();
    const port = process.env.PORT || 4000;

    // Middleware to parse JSON requests
    app.use(express.json());

    // Define a route for the chatbot
    app.post('/cdp-chatbot', async (req: Request, res: Response) => {
        const userMessage = req.body.message;
        // Process the user message and generate a response
        const botResponse = await callAgent(agent, config, userMessage);
        res.json({ response: botResponse });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});