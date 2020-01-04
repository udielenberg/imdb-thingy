import React, { useState } from "react";
import Search from "./Search";
import Movie from "./Movie";

const App = props => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <Search {...{ setSelectedMovie }} />
      {selectedMovie && <Movie selected={selectedMovie} />}
    </div>
  );
};

export default App;
