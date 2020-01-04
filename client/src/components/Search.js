import React from "react";
import Autocomplete from "react-select/async";
import debounce from "debounce-promise";
import { getMovieByTitle, getMovieById } from "../API";
import MovieOption from "./MovieOption";

const transformToMovieOptions = movies =>
  movies.map(({ ...rest }) => ({
    label: rest.Title,
    value: rest.Title,
    ...rest
  }));

const Search = props => {
  const { setSelectedMovie } = props;

  const loadOptions = async searchValue => {
    const res = await getMovieByTitle(searchValue);
    return transformToMovieOptions(res);
  };
  const formatOptionLabel = data => {
    const { Poster, Title, Year, label, id } = data;
    return <MovieOption data={data} />;
  };

  const handleOnChange = async ({ imdbID }) => {
    const selectedMovie = await getMovieById(imdbID);
    setSelectedMovie(selectedMovie);
  };
  return (
    <div className="Search">
      <Autocomplete
        placeholder="Search for a movie"
        onChange={handleOnChange}
        loadOptions={debounce(loadOptions, 5000)}
        cacheOptions
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default Search;
