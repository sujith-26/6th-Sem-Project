require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  date: String,
  time: String,
  message: String,
  status: { type: String, default: "Pending" },
});

const Booking = mongoose.model("Booking", bookingSchema);

// API Endpoint to Create a Booking
app.post("/api/bookings", async (req, res) => {
  try {
    const { name, phone, email, service, date, time, message } = req.body;
    const newBooking = new Booking({ name, phone, email, service, date, time, message });
    await newBooking.save();
    res.status(201).json({ message: "Booking Successful", booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Booking failed" });
  }
});

// API Endpoint to Get All Bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
