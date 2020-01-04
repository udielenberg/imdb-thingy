import React from 'react';

const MovieOption = (props) => {
  const {Poster, Title, Year} = props.data;
  return (
    <div className="MovieOption">
      <img src={Poster} className="poster"/> 
      <div className="info">{Title} ({Year})</div>
    </div>
  );
}

export default MovieOption;