const router = require('express').Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { isAuthenticated } = require('../middleware/auth');
const ErrorHandler = require('../utils/ErrorHandler');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
router.post('/generate-script',isAuthenticated, async (req, res, next) => {
    const { comedyType,theme, audience, tone, duration, cprompt } = req.body;
  console.log("hi");
    try {
      // Generate a prompt for the AI based on user input
      // console.log(req.user);
      const user = req.user;
    if(user.credits<2){
        return next(new ErrorHandler("You dont have enough credits please upgrade!"));
    }
    user.credits-=2;
    user.save();
      const prompt = cprompt || `Generate a comedy script for a stand-up performance based on the following parameters:

- Theme: ${theme}
- Style of Comedy: ${comedyType}
- Length: ${duration}
- Target Audience: ${audience}
- Language Tone: ${tone}

The script should be engaging, humorous, and relatable for the ${audience}. The character delivering the performance should come across as witty and sarcastic, making lighthearted yet insightful jokes about ${theme}.
`;
  
      // Call OpenAI's API to generate text
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      res.status(200).json({ script: text });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  });

  module.exports = router;