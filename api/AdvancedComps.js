
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Make sure to set this in Vercel environment variables
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: "Only POST requests are allowed" });
    return;
  }

  const { userDetails } = req.body;

  try {
    // Use Groq's chat completion to generate a compliment
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Generate a compliment for someone based on these details: ${userDetails}`,
        },
      ],
      model: "llama3-8b-8192",
    });

    const compliment = response.choices[0]?.message?.content || "You're amazing!";
    res.status(200).json({ compliment });
  } catch (error) {
    console.error("Error generating compliment:", error);
    res.status(500).json({ message: "Failed to generate compliment" });
  }
};
