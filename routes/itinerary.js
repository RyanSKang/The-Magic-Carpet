const express = require("express");
const router = express.Router();
const Itinerary = require("../models/Itinerary");

const ObjectId = require("mongodb").ObjectID;

router.get("/itinerary/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const itineraryData = await Itinerary.find({ user: ObjectId(id) });
    if (itineraryData) {
      console.log(itineraryData);
      res.status(200).json({ status: "Congratulations!", itineraryData: itineraryData });
    } else {
      res.status(400).json({ message: "Where did we go wrong?" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;