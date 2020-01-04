import React from "react";
import omit from "lodash/omit";

const blackListDetails = [
  "Response",
  "type",
  "BoxOffice",
  "imdbID",
  "DVD",
  "Poster",
  "Title",
  "Year",
  "Ratings"
];

const renderInfo = selected => {
  const filteredInfo = omit(selected, blackListDetails);

  return Object.entries(filteredInfo).map(
    ([key, value]) => (
      <div key={key}>
        <b>{key}: </b>
        {value}
      </div>
    )
  );
};

const renderPoster = posterUrl => {
  const notAvailableUrl =
    "https://hafaga.weebly.com/uploads/1/1/0/0/11007965/2908935_orig.jpg";
  const url = posterUrl.includes("http")
    ? posterUrl
    : notAvailableUrl;

  return <img src={url} />;
};

const Movie = ({ selected }) => {
  const {
    Poster,
    Title,
    Year,
    Director,
    Country,
    Genre,
    Runtime,
    Actors,
    Plot
  } = selected;

  return (
    <div className="Movie">
      <div className="poster">{renderPoster(Poster)}</div>
      <div className="info">
        <h4>
          {Title} ({Year})
        </h4>
        {renderInfo(selected)}
      </div>
    </div>
  );
};

export default Movie;
