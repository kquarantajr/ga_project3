import '../styles/Result.css'

const Result = (props) => {
 
    return(
        <div className="unitContainer">
            <div>{props.object.artworkUrl100 ? <img src={props.object.artworkUrl100} alt="artwork" /> : <div></div> }</div>
            <h4>{props.object.trackName ? props.object.trackName : <></>}</h4>
            <h4>{props.object.collectionName ? props.object.collectionName : `(data unavailable)`}</h4>
            <p>{props.object.artistName}</p>
            <p style={{color: "grey"}}>{props.object.primaryGenreName}</p>
        </div>
    )
}

export default Result;