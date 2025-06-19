const Card = ({url,title,date}) => {
    return(
        <div className="movie-card">
            <img src={url} alt='loading...' className="movie-image" lazy />
            <div className="movie-details">
                 <h3 className="movie-title">{title}</h3>
                 <p className="movie-year">{date}</p>
            </div>
         </div>
    )
}
export default Card;