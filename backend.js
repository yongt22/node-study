import express from "express";
import listingsRouter from "./routes/listings.js"; // Import the listings router (Method 2)

console.log("Initializing the backend server...");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("frontend"));

// Define a route for the listings API (Method 1)
/* app.get("/api/listings", (req, res) => {
  console.log("Received request for /api/listings");
  res.send("Hello listings api");
}); */

app.use("/api", listingsRouter); // Use the listings router (Method 2)

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
