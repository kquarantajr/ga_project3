import '../styles/Result.css'

const Result = (props) => {
 
    return(
        <div className="unitContainer">
            <img src={props.object.artworkUrl100} alt="artwork" />
            <h2>{props.object.collectionName}</h2>
            <p>{props.object.artistName}</p>
            <p style={{color: "grey"}}>{props.object.primaryGenreName}</p>
        </div>
    )
}

export default Result;