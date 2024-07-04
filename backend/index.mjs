import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

//Email setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, inquiry } = req.body;

  const mailOptions = {
    from: {
      name: "Mith Sah",
      address: process.env.EMAIL_USER,
    }, //sender address
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: inquiry,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});

//for the chatbot response
app.post("/chatbot", async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  const { history, message } = req.body;

  // Function to get the latest user message from the history
  function getLatestUserMessage(history) {
    const userMessages = history.filter((msg) => msg.type === "user");
    return userMessages.length
      ? userMessages[userMessages.length - 1].message
      : null;
  }

  // Get the latest user message from the provided history
  const latestUserMessage = getLatestUserMessage(history);

  // Log the latest user message
  console.log("Latest User Message:", latestUserMessage);

  // Generate content using the genAI model
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = latestUserMessage;

    const result = await model.generateContent(prompt); // Ensure await is used for async function
    const response = await result.response;

    const text = await response.text(); // Ensure await is used to get the text

    console.log(text);

    // Send the generated text as the response
    res.status(200).send({ text });
  } catch (error) {
    console.error("Error generating content:", error.message || error);
    res.status(500).send(`Error generating content: ${error.message || error}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
