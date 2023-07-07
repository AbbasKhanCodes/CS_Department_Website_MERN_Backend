import Event from "../models/event.js";
import News from "../models/news.js";
const getAllData = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    const news = await News.find().sort({ date: -1 });

    // Send the response
    res.status(201).json({
      message: "Data has displayed successfully!",
      news,
      events,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to display data." });
  }
};

export default getAllData;
