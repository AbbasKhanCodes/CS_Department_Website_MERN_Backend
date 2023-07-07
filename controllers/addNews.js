import News from "../models/news.js";

const addNews = async (req, res) => {
  try {
    const news = await News.create(req.body);

    // Send the response
    res.status(201).json({
      message: "News has created successfully!",
      news: news,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create News." });
  }
};

export default addNews;
