const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/random-bird', async (req, res) => {
  const apiUrl = 'https://some-random-api.ml/img/birb';

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.link) {
      return res.status(404).send("No image found from the API.");
    }

    res.json({
      message: "Here's a random bird 🐦",
      imageUrl: data.link
    });
  } catch (error) {
    console.error("Error fetching bird image:", error.message);
    res.status(500).send("An error occurred while fetching the bird image.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
