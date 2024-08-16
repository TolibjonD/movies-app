import "./movie-list-item.css"

const MovieListItem = ({ name, views, onDelete, favourite, like, onToggleProp }) => {

        return (
            <li className={`list-group-item d-flex justify-content-between ${favourite && ' favourite'} ${like && ' like'}`}>
                <span
                className="list-group-item-label"
                onClick={ onToggleProp }
                data-toggle="like"
                >
                    <i className="fa-solid fa-film text-dark me-2"></i>
                    {name.length > 30 ? `${name.slice(0,30)}...` : name} 
                </span>
                <div className="see">
                <i className="fa-solid fa-eye"></i>
                <input type="number" className="list-group-item-input" defaultValue={views} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={ onToggleProp }
                data-toggle="favourite" className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick={ onDelete }>
                        <i className="fas fa-trash btn-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }

// const MovieListItem = ({ name, viewers, favourite }) => {
//     return (
//         <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//             <span className="list-group-item-label"> {name} </span>
//             <input type="number" className="list-group-item-input" defaultValue={viewers} />
//             <div className="d-flex justify-content-center align-items-center">
//                 <button className="btn-cookie btn-sm">
//                     <i className="fas fa-cookie"></i>
//                 </button>
//                 <button className="btn-trash btn-sm">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

export default MovieListItem