const express = require("express");
const axios = require("axios");

const router = express.Router();

//Handle search movies request
let limiter = false;
router.get("/:query", (req, res) => {
  if (limiter) {
    res.json({ msg: "ERROR, too many request, wait a bit ..." });
  } else {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.query}&page=1&include_adult=false`;
    axios
      .get(url)
      .then(response => {
        //Respond with json data
        limiter = true;
        setTimeout(() => {
          limiter = false;
        }, 2000);
        res.json(response.data);
      })
      .catch(err => {
        timedReset(5000);
        res.json({
          message: "An error occured",
          error: err
        });
      });
  }
});

//Handle details request on a specific movie
router.get("/film/:id", (req, res) => {
  if (limiter) {
    res.json({ msg: "ERROR, too many request, wait a bit ..." });
  } else {
    const url = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`;
    axios
      .get(url)
      .then(response => {
        //Respond with json data
        limiter = true;
        setTimeout(() => {
          limiter = false;
        }, 2000);
        res.json(response.data);
      })
      .catch(err => {
        res.json({
          message: "An error occured",
          error: err
        });
      });
  }
});

module.exports = router;
