import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Option from './Option';


const Search = (props) => {

  const [entityArray, setEntityArray] = useState(['allArtist','movie', 'album','podcast','musicVideo','mix','audiobook','tvSeason','allTrack']);
  const [attributeArray, setAttributeArray] = useState(['actorTerm','languageTerm','allArtistTerm','tvEpisodeTerm','shortFilmTerm','directorTerm','releaseYearTerm','titleTerm','featureFilmTerm','ratingIndex','keywordsTerm','descriptionTerm','authorTerm','genreIndex','mixTerm','allTrackTerm','artistTerm','composerTerm','tvSeasonTerm','producerTerm','ratingTerm','songTerm','movieArtistTerm','showTerm','movieTerm','albumTerm']);
  

  const handleFields = (event) => {
    props.handleMediaType(event);

    switch(event.target.value){
      default:
        setEntityArray(['movie', 'album', 'allArtist','podcast','musicVideo','mix','audiobook','tvSeason','allTrack']);
        setAttributeArray(['actorTerm','languageTerm','allArtistTerm','tvEpisodeTerm','shortFilmTerm','directorTerm','releaseYearTerm','titleTerm','featureFilmTerm','ratingIndex','keywordsTerm','descriptionTerm','authorTerm','genreIndex','mixTerm','allTrackTerm','artistTerm','composerTerm','tvSeasonTerm','producerTerm','ratingTerm','songTerm','movieArtistTerm','showTerm','movieTerm','albumTerm']);
        break;
      case 'music':
        setEntityArray(['musicArtist','musicTrack','album','musicVideo','mix','song']);
        setAttributeArray(['mixTerm','genreIndex','artistTerm','composerTerm','albumTerm','ratingIndex','songTerm']);
        break;
      case 'podcast':
        setEntityArray(['podcastAuth','podcast']);
        setAttributeArray(['titleTerm','languageTerm','authorTerm','genreIndex','artistTerm','ratingIndex','keywordsTerm','descriptionTerm'])
        break;
      case 'movie':
        setEntityArray(['movieArtist','movie']);
        setAttributeArray(['actorTerm','genreIndex','artistTerm','shortFilmTerm','producerTerm','ratingTerm','directorTerm','releaseYearTerm','featureFilmTerm','movieArtistTerm','movieTerm','ratingIndex','descriptionTerm']);
        break;
      case 'musicVideo':
        setEntityArray(['musicArtist', 'musicVideo']);
        setAttributeArray(['genreIndex','albumTerm','ratingIndex','songTerm']);
        break;
      case 'audiobook':
        setEntityArray(['audiobookAuthor','audiobook']);
        setAttributeArray(['titleTerm','authorTerm','genreIndex','ratingIndex']);
        break;
      case 'shortFilm':
        setEntityArray(['shortFilmArtist','shortFilm']);
        setAttributeArray(['genreIndex','artistTerm','shortFilmTerm','ratingIndex','descriptionTerm']);
        break;
      case 'tvShow':
        setEntityArray(['tvEpisode','tvSeason']);
        setAttributeArray(['genreIndex','tvEpisodeTerm','showTerm','tvSeasonTerm','ratingIndex','descriptionTerm']);
        break;
      case 'software':
        setEntityArray(['software', 'iPadSoftware', 'macSoftware']);
        setAttributeArray(['softwareDeveloper']);
        break;
      case 'ebook':
        setEntityArray(['ebook'])
        break;
    }
  }

    return(
        <div>
            <h1>iTunes Search</h1>
            <div>
                <label htmlFor="mediaType">Media Type</label>
                <select id="mediaType" onChange={(event) => handleFields(event)}>
                    <option name="mediaType" value="all">All</option>
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
                <label htmlFor="entityType">Entity Type: </label>
                <select id="entityType" name="entityType" onChange={(event) => {props.handleEntityType(event)}}>
                    {entityArray.map((element, index) => (
                        <Option key={index} element={element} />
                    ))}
                </select>
                <label hmtlFor="attributeType">Attribute Type: </label>
                <select id="attributeType" name="attributeType" onChange={(event) => {props.handleAttributeType(event)}}>
                    {attributeArray.map((element, index) => (
                        <Option key={index} element={element} />
                    ))}
                </select>
                <label htmlFor="limitInput">Limit</label>
                <input id="limitInput" name="limitInput"type="number" min="1" max="200" style={{maxWidth: "30px"}}onChange={(event) => {props.handleLimit(event)}} />
                <label htmlFor="explicitInput">Include Explicit?</label>
                <select id="explicitInput" name="explicitInput" onChange={(event) => props.handleExplicit(event)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div>
                    <label htmlFor="searchInput">Search: </label>
                    <input id="searchInput" name="searchInput" type="text" onChange={(event) => {props.handleSearch(event)}}/>
                </div>
                <button onClick={props.handleClick}>Show Results</button>
            </div>
        </div>
    )
}

export default Search;