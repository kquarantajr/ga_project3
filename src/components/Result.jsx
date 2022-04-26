import '../styles/Result.css'

const Result = (props) => {
 
    return(
        <div className="unitContainer">
            <p>Artist Name: {props.object.artistName}</p>
            <p>Genre: {props.object.primaryGenreName}</p>
        </div>
    )
}

export default Result;