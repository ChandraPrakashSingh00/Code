const {
  generateAIResponse,
} = require("../services/gemini.service");

/*
============================================================
  CHAT WITH AI
============================================================
POST /api/ai/chat
============================================================
*/

const chatWithAI = async (req, res) => {
  try {
    const {
      message,
      history,
    } = req.body;

    /*
    ==========================================================
      VALIDATE MESSAGE
    ==========================================================
    */

    if (
      !message ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    /*
    ==========================================================
      MESSAGE LENGTH LIMIT
    ==========================================================
    */

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        message:
          "Message is too long. Please keep it under 2000 characters.",
      });
    }

    /*
    ==========================================================
      GENERATE AI RESPONSE
    ==========================================================
    */

    const reply =
      await generateAIResponse(
        message.trim(),
        history
      );

    /*
    ==========================================================
      SEND RESPONSE
    ==========================================================
    */

    return res.status(200).json({
      success: true,
      reply: reply,
    });
  } catch (error) {
    console.error(
      "AI Controller Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Sorry, AI assistant is temporarily unavailable.",
    });
  }
};

module.exports = {
  chatWithAI,
};