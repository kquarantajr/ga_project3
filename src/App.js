import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Result from './components/Result';

//1 commit

function App() {

  const [search, setSearch] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [explicit, setExplicit] = useState([false]);
  const [limit, setLimit] = useState(50);
  const [mediaType, setMediaType] = useState('all');

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value);
    getData();
    // console.log(search)
  }

  const handleLimit = (event) => {
    setLimit(event.target.value);
    console.log("Limit: " + event.target.value)
    getData();
  }

  const handleMediaType = (event) => {
    setMediaType(event.target.value);
    console.log("Media Type: " + event.target.value);
    getData();
  }

  const handleExplicit = (event) => {
    setExplicit(event.target.value);
    console.log("Explicit: " + event.target.value)
    getData();
  }

  const getData = async () => {
    const response = await axios.get(`https://itunes.apple.com/search?term=${search}&country=us&media=${mediaType}&entity=musicArtist&lang=en_us&explicit=${explicit}&limit=${limit}`);
    console.log(search);
    console.log(response.data.results);
    setDataArray(response.data.results);
  }

  useEffect(() => {{getData();}
  }, [])


  return (
    <div className="App">
        <h1>iTunes Search</h1>
        <div>
            <label htmlFor="mediaType">Media Type</label>
            <select onChange={(event) => handleMediaType(event)}>
              <option name="mediaType" value="all" selected>All</option>
              <option name="mediaType" value="music">Music</option>
              <option name="mediaType" value="podcast">Podcasts</option>
              <option name="mediaType" value="movie">Movies</option>
              <option name="mediaType" value="musicVideo">Music Videos</option>
              <option name="mediaType" value="audiobook">Audiobooks</option>
              <option name="mediaType" value="shortFilm">Short Films</option>
              <option name="mediaType" value="tvShow">TV Shows</option>
              <option name="mediaType" value="software">Software</option>
              <option name="mediaType" value="ebook">eBooks</option>
            </select>
            <label htmlFor="searchInput">Search: </label>
            <input id="searchInput" name="searchInput" type="text" onChange={(event) => {handleSearch(event)}}/>
            <label htmlFor="limitInput">Limit</label>
            <input id="limitInput" name="limitInput"type="number" min="1" max="200 " onChange={(event) => {handleLimit(event)}} />
            <label htmlFor="explicitInput">Include Explicit?</label>
            <select id="explicitInput" name="explicitInput" onChange={(event) => handleExplicit(event)}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
        </div>
        {/* <button onClick={() => {handleSearch()}}>Search</button> */}
        <div>
        {dataArray.map((object, index) => (
            <Result key={object.artistID} object={object}/>
          ))
        }
        </div>
    </div>
  );
}
export default App
