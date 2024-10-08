import "./movieList.css"
import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({ data, onDelete, onToggleProp }) => {

    const noData = data.length > 0 ? false : true

    return <ul className="movieList">
        { noData && "No Movies Found... 😔" }
        { data.map(item => 
            <MovieListItem
            key={item.id}
            name={item.name}
            views={item.views}
            favourite={item.favourite}
            like={ item.like }
            onDelete={ () => onDelete(item.id) }
            onToggleProp= {(e) => onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}
            />
        ) }
    </ul>
    }

export default MovieList