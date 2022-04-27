import React, { useState , useEffect } from 'react';
import Result from './Result';
import axios from 'axios';

const Results = (props) => {

    const [dataArray, setDataArray] = useState([]);

    const getData = async () => {
        const response = await axios.get(`https://itunes.apple.com/search?term=${props.search}&media=${props.mediaType}&entity=${props.entityType}&attribute=${props.attributeType}&explicit=${props.explicit}&limit=${props.limit}&country=us&lang=en_us`);
        console.log(response.data.results);
        setDataArray(response.data.results);
      }
    
      useEffect(() => {
          getData();
      }, [])

    return(
        <div>
            <button onClick={props.handleClick}>Back to Search</button>
            {dataArray.map((object, index) => (
                <Result key={object.artistID} object={object}/>
                ))
            }
        </div>
    )
}

export default Results;