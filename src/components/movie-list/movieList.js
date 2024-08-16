import "./movieList.css"
import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({ data, onDelete, onToggleProp }) => {

        return <ul className="movieList">
            
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