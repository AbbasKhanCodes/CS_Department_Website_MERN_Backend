import Event from "../models/event.js";

const addEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    // Send the response
    res.status(201).json({
      message: "Event has created successfully!",
      event: event,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create Event." });
  }
};

export default addEvent;
