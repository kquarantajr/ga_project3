import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Search from './components/Search';
import Results from './components/Results';

const App = () => {

  const [bool, setBool] = useState(true);

  const [search, setSearch] = useState('');
  const [explicit, setExplicit] = useState(['yes']);
  const [limit, setLimit] = useState(50);
  const [mediaType, setMediaType] = useState('all');
  const [entityType, setEntityType] = useState('allArtist');
  const [attributeType, setAttributeType] = useState(['allArtistTerm']);
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value);
    // console.log(search)
  }

  const handleMediaType = (event) => {
    console.log(event.target.value)
    setMediaType(event.target.value);
  }

  const handleEntityType = (event) => {
    const entityLowerCase = event.target.value;
    setEntityType(entityLowerCase);
  }

  const handleAttributeType = (event) => {
    const attributeLowerCase = event.target.value;
    setAttributeType(attributeLowerCase);
  }

  const handleExplicit = (event) => {
    setExplicit(event.target.value);
    console.log("Explicit: " + event.target.value)
  }

  const handleLimit = (event) => {
    setLimit(event.target.value);
    console.log("Limit: " + event.target.value);
  }

  const handleClick = () => {
    const reverse = bool ? setBool(false) : setBool(true);
    setBool(!bool);
  }

  return (
    <div className="App">
     { bool ? <Search handleClick={handleClick} search={search} handleSearch={handleSearch} explicit={explicit} handleExplicit={handleExplicit} limit={limit} handleLimit={handleLimit} mediaType={mediaType} handleMediaType={handleMediaType} entityType={entityType} handleEntityType={handleEntityType} attributeType={attributeType} handleAttributeType={handleAttributeType}/>
     : <Results handleClick={handleClick} search={search} handleSearch={handleSearch} explicit={explicit} handleExplicit={handleExplicit} limit={limit} handleLimit={handleLimit} mediaType={mediaType} handleMediaType={handleMediaType} entityType={entityType} handleEntityType={handleEntityType} attributeType={attributeType} handleAttributeType={handleAttributeType} /> }
    </div>
  );
}

export default App;
