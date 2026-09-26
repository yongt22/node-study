import express from "express";

const listings = [
  {
    title: "Cozy Apartment in Downtown",
    address: "1231 California St, San Francisco, CA 941090",
    price: 1200,
    bedroom: 2,
    note: "",
    photo: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
  },
];

const router = express.Router();

router.get("/listings", (req, res) => {
  console.log("Received request for /api/listings");
  //res.send("Hello listings api");
  //res.send(`<h1>Hello listings api</h1>`); //Don't do this in the project
  res.json({ listings });
});

export default router;
