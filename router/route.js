import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Selamat Datang Di Homework 8 Rakamin DVD Rental");
});

export default router;
