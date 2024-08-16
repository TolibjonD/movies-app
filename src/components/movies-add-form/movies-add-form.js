import "./movies-add-form.css"
import {  useState } from "react"

const MovieAddForm = ({addForm}) => {
    const [state, setState] = useState({name: '', views: ''})

    const changeHandlerInput = e => {
        setState({...state, [e.target.name]: e.target.value })
    }

    const addMoviesHandler = e => {
        e.preventDefault();
        const data = { name: state.name, views: state.views }
        addForm(data)
        setState({name: '', views: ''})
    }

    return( 
    <div className="movies-add-form">
        <h3>Add new movie</h3>
        <form className="add-form d-flex" onSubmit={ addMoviesHandler }>
            <input
            type="text"
            className="form-control new-post-label"
            placeholder="Movie name ?"
            onChange={ changeHandlerInput }
            name="name"
            value={state.name}
            />
            <input
            type="number"
            className="form-control new-post-label"
            placeholder="Views number ?"
            onChange={ changeHandlerInput }
            name="views"
            value={state.views}
            />
            <button type="submit" className="btn btn-outline-primary">Qo'shish</button>
        </form>
        </div>
        )
}

// class MovieAddForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             views: ''
//         }
//     }

//     changeHandlerInput = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     addMoviesHandler = e => {
//         e.preventDefault();
//         this.props.addForm(
//             {name: this.state.name,
//             views: this.state.views,
//             like: false,
//             favourite: false,
//             id:uuidv4() })
//         this.setState({
//             name: '',
//             views: '',
//         })
//     }

//     render() {
//         const { name, views } = this.state
        
//         return <div className="movies-add-form">
//         <h3>Yangi kino qo'shish</h3>
//         <form className="add-form d-flex" onSubmit={ this.addMoviesHandler }>
//             <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Qanday kino ?"
//             onChange={ this.changeHandlerInput }
//             name="name"
//             value={name}
//             />
//             <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Nechchi marotaba ko'rilgan ?"
//             onChange={ this.changeHandlerInput }
//             name="views"
//             value={views}
//             />
//             <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
//         </form>
//         </div>
//     }
// }

export default MovieAddForm