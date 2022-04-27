import '../styles/Result.css'

const Result = (props) => {
 
    return(
        <div className="unitContainer">
            <div>{props.object.artworkUrl100 ? <img src={props.object.artworkUrl100} alt="artwork" /> : <div></div> }</div>
            <h4>{props.object.trackName ? props.object.trackName : <></>}</h4>
            <h4>{props.object.collectionName ? props.object.collectionName : `(data unavailable)`}</h4>
            <p style={{fontFamily: "serif"}}>{props.object.artistName}</p>
            <p style={{color: "grey"}}>{props.object.primaryGenreName}</p>
            <p style={{backgroundColor: "black", color: "white", maxWidth: "60px", width: "40%", margin: "0 auto"}}>{props.object.contentAdvisoryRating ? props.object.contentAdvisoryRating : <div></div>}</p>
            {/* <p>{props.object.releaseDate ? props.object.releaseDate : <div></div>}</p> */}
        </div>
    )
}

export default Result;