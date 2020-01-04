const fetch = require("node-fetch");
const url = require("../config");
const getMovieByTitle = async movie => {
  try {
    const fullUrl = getFullUrl("title", movie);
    const res = await fetch(fullUrl);
    const json = await res.json();
    return json.Search;
  } catch (err) {
    console.error(err);
  }
};

const getMovieById = async movieId => {
  try {
    const fullUrl = getFullUrl("id", movieId);
    const res = await fetch(fullUrl);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

function getFullUrl(type = "title", string) {
  if (type === "title") {
    const movieTitle = string.replace(" ", "+");
    return `${url}&s=${movieTitle}`;
  } else if (type === "id") {
    return `${url}&i=${string}`;
  }
}

module.exports = {
  getMovieById,
  getMovieByTitle
};
