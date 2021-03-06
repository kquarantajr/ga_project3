import '../styles/Search.css';
import React, { useState } from 'react';
import Option from './Option';


const Search = (props) => {

  const [entityArray, setEntityArray] = useState(['allArtist','movie', 'album','podcast','musicVideo','audiobook','tvSeason','allTrack']);
  const [attributeArray, setAttributeArray] = useState(['actorTerm','allArtistTerm','tvEpisodeTerm','directorTerm','releaseYearTerm','titleTerm','featureFilmTerm','keywordsTerm','authorTerm','allTrackTerm','artistTerm','composerTerm','tvSeasonTerm','producerTerm','ratingTerm','songTerm','movieArtistTerm','showTerm','movieTerm','albumTerm']);
  

  const handleFields = (event) => {
    props.handleMediaType(event);
    switch(event.target.value){
      default:
        setEntityArray(['movie', 'album', 'allArtist','podcast','musicVideo','audiobook','tvSeason','allTrack']);
        setAttributeArray(['actorTerm','allArtistTerm','tvEpisodeTerm','directorTerm','releaseYearTerm','titleTerm','featureFilmTerm','keywordsTerm','authorTerm','allTrackTerm','artistTerm','composerTerm','tvSeasonTerm','producerTerm','ratingTerm','songTerm','movieArtistTerm','showTerm','movieTerm','albumTerm']);
        break;
      case 'music':
        setEntityArray(['musicArtist','musicTrack','album','musicVideo','song']);
        setAttributeArray(['artistTerm','composerTerm','albumTerm','songTerm']);
        break;
      case 'podcast':
        setEntityArray(['podcastAuth','podcast']);
        setAttributeArray(['titleTerm','authorTerm','artistTerm','keywordsTerm'])
        break;
      case 'movie':
        setEntityArray(['movieArtist','movie']);
        setAttributeArray(['actorTerm','artistTerm','producerTerm','ratingTerm','directorTerm','releaseYearTerm','featureFilmTerm','movieArtistTerm','movieTerm']);
        break;
      case 'musicVideo':
        setEntityArray(['musicArtist', 'musicVideo']);
        setAttributeArray(['albumTerm','songTerm']);
        break;
    //   case 'audiobook':
    //     setEntityArray(['audiobookAuthor','audiobook']);
    //     setAttributeArray(['titleTerm','authorTerm']);
    //     break;
    //   case 'shortFilm':
    //     setEntityArray(['shortFilmArtist','shortFilm']);
    //     setAttributeArray(['artistTerm','shortFilmTerm']);
    //     break;
      case 'tvShow':
        setEntityArray(['tvEpisode','tvSeason']);
        setAttributeArray(['tvEpisodeTerm','showTerm','tvSeasonTerm']);
        break;
    //   case 'software':
    //     setEntityArray(['software', 'iPadSoftware', 'macSoftware']);
    //     setAttributeArray(['softwareDeveloper']);
    //     break;
    //   case 'ebook':
    //     setEntityArray(['ebook']);
    //     setAttributeArray([]);
    //     break;
    }
  }
    return(
        <div className="searchBody">
            <header>
                <h1>iTunes Search</h1>
                <p>via the <a target="_blank" href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunes Search API</a></p>
            </header>
            <div>
                <fieldset>
                    <legend><b>Search Terms:</b></legend>
                    <div className="inputField">
                        <label htmlFor="mediaType">Media Type: </label>
                        <select id="mediaType" onChange={(event) => handleFields(event)}>
                            <option name="mediaType" value="all">All</option>
                            <option name="mediaType" value="music">Music</option>
                            <option name="mediaType" value="podcast">Podcast</option>
                            <option name="mediaType" value="movie">Movie</option>
                            <option name="mediaType" value="musicVideo">Music Video</option>
                            {/* <option name="mediaType" value="audiobook">Audiobook</option> */}
                            {/* <option name="mediaType" value="shortFilm">Short Film</option> */}
                            <option name="mediaType" value="tvShow">TV Show</option>
                            {/* <option name="mediaType" value="software">Software</option> */}
                            {/* <option name="mediaType" value="ebook">eBook</option> */}
                        </select>
                    </div>
                    <div className="inputField" id="entityField">
                        <label htmlFor="entityType">Type Returned: </label>
                        <select id="entityType" name="entityType"  style={{minWidth: "150px"}} onChange={(event) => {props.handleEntityType(event)}}>
                            {entityArray.map((element, index) => (
                                <Option key={index} element={element} />
                            ))}
                        </select>
                    </div>
                    <div className="inputField" id="attributeField">
                        <label hmtlFor="attributeType" >Search By: </label>
                        <select id="attributeType" name="attributeType" onChange={(event) => {props.handleAttributeType(event)}}>
                            {attributeArray.map((element, index) => (
                                <Option key={index} element={element} />
                            ))}
                        </select>
                    </div>
                    <div className="inputField">
                        <label htmlFor="limitInput">Limit # of Results (from 1 to 250): </label>
                        <input id="limitInput" name="limitInput"type="number" min="1" max="200" placeholder="50" style={{minWidth: "40px", maxWidth: "50px"}} onChange={(event) => {props.handleLimit(event)}} />
                    </div>
                    <div className="inputField">
                        <label htmlFor="explicitInput">Include Explicit?</label>
                        <select id="explicitInput" name="explicitInput" onChange={(event) => props.handleExplicit(event)}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </fieldset>
                <div className="searchInput">
                    <label htmlFor="searchInput">Search: </label>
                    <input id="searchInput" name="searchInput" type="text" onChange={(event) => {props.handleSearch(event)}}/>
                </div>
                <button onClick={props.handleClick}>Show Results</button>
            </div>
        </div>
    )
}

export default Search;