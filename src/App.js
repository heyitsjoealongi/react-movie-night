import React from 'react';
import './App.css';

import SearchMovies from "./searchMovies";

class App extends React.Component {
  render() { 
    return (
      <div className="container">
        <h1 className="title">Movie Night</h1>
        <SearchMovies/>
      </div>
    );
  }
}

export default App;
