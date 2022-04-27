import React, { useState , useEffect } from 'react';
import Result from './Result';
import axios from 'axios';

const Results = (props) => {

    const [numResults, setNumResults] = useState(0);
    const [dataArray, setDataArray] = useState([]);

    const getData = async () => {
        const response = await axios.get(`https://itunes.apple.com/search?term=${props.search}&media=${props.mediaType}&entity=${props.entityType}&explicit=${props.explicit}&limit=${props.limit}&country=us&lang=en_us`);
        // console.log(response.data.results);
        console.log(response);
        setNumResults(response.data.resultCount);
        setDataArray(response.data.results);
      }
    
      useEffect(() => {
          getData();
      }, [])

    return(
        <div>
            <button onClick={props.handleClick}>Back to Search</button>
            <p>Number of Results: {numResults}</p>
            {dataArray.map((object, index) => (
                <Result key={object.artistID} object={object}/>
                ))
            }
        </div>
    )
}

export default Results;