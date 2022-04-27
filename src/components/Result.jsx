import '../styles/Result.css'

const Result = (props) => {
 
    return(
        <div className="unitContainer">
            <img src={props.object.artworkUrl100} alt="artwork" />
            <p>Artist Name: {props.object.artistName}</p>
            <p>{props.object.collectionType}: {props.object.collectionName}</p>
            <p>Genre: {props.object.primaryGenreName}</p>
        </div>
    )
}

export default Result;