const Clarifai = require("clarifai");

//This is the API key
const app = new Clarifai.App({
  apiKey: "97eb9a5f7d784f8c967e71531690675f",
});

const handleApiCall = (req, res) => {
  app.models
    .predict("53e1df302c079b3db8a0a36033ed2d15", req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Unable to work with API"));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db.where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json("unable to get entries"));
};

module.exports = {
  handleImage,
  handleApiCall,
};

//uytdftrcx f5y5yit7cdx
