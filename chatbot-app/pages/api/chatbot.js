import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post(process.env.API_URL, {
        message
      });

      if (response.data) {
        res.status(200).json({ message: response.data });
      } else {
        res.status(400).json({ error: 'No response from chatbot' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error contacting chatbot' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}