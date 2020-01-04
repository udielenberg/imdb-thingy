export const getMovieByTitle = async string => {
  const movieTitle = string.replace(" ", "+");
  try {
    const res = await fetch(`/movies/?q=${string}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
export const getMovieById = async imdbID => {
  try {
    const res = await fetch(`/${imdbID}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
