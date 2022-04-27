import '../styles/Results.css'
import React, { useState , useEffect } from 'react';
import Result from './Result';
import axios from 'axios';

const Results = (props) => {

    const [numResults, setNumResults] = useState(0);
    const [dataArray, setDataArray] = useState([]);

    const getData = async () => {
        const response = await axios.get(`https://itunes.apple.com/search?term=${props.search}&media=${props.mediaType}&entity=${props.entityType}&attribute=${props.attributeType}&explicit=${props.explicit}&limit=${props.limit}&country=us&lang=en_us`);
        // console.log(response.data.results);
        console.log(response);
        console.log("Media Type: " + props.mediaType);
        console.log("Entity Type: " + props.entityType);
        setNumResults(response.data.resultCount);
        setDataArray(response.data.results);
      }
    
      useEffect(() => {
          getData();
      }, [])

    return(
        <div className="resultsPage">
            <button onClick={props.handleClick}>Back to Search</button>
            <h3>{numResults===0 ? `${numResults} Results` : `No results for this search`}</h3>  
            <div className="resultsContainer">
                {dataArray.map((object, index) => (
                    <Result key={object.artistID} object={object}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Results;