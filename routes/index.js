const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:query", (req, res) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US${query}&include_adult=false`
  axios
    .get(url)
    .then(response => {
      res.json(response.data)
    })
    .catch(err =>{
      res.json({
        message: "An error occured",
        error: err
      })
    })
});

router.get("/film/:id", (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`;
  axios
    .get(url)
    .then(response => {
      res.json(response.data)
    })
    .catch(err =>{
      res.json({
        message: "An error occured",
        error: err
      })
    })
});

module.exports = router;
