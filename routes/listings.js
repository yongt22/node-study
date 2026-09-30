import express from "express";
import MyDB from "../db/myMongoDB.js";

const router = express.Router();

router.get("/listings", async (req, res) => {
  console.log("Received request for /api/listings");

  try {
    const listings = await MyDB.getListings();
    res.json({ listings });
  } catch (error) {
    console.error("Error fetching listings", error);
    res.status(500).json({ error: "Internal Server Error", listings: {} });
  }
});

export default router;
