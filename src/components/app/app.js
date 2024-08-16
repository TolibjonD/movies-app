import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movieList"
import MovieAddForm from "../movies-add-form/movies-add-form"
import {  useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [data, setdata] = useState(arr)
    const [filter, setfilter] = useState('all')
    const [term, setterm] = useState('')

    const onDelete = id => {
        const newArr = data.filter(c => c.id !== id)
        setdata(newArr)
    }

    const addForm = item => {
        const newItem = { name: item.name, views: item.views, id: uuidv4(),favourite: false, like: false  }
        const newArr = [...data, newItem]
        setdata(newArr)
    }

    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if(item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item
        })
        setdata(newArr)
    }

    const searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    const filterhandler = (arr, filter) => {
        switch(filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViews':
                return arr.filter(c => c.views > 1000)
            default:
                return arr
        }
    }

    const updateTermHandler = term => setterm(term)

    const updateFilterHandler = filter => setfilter(filter)

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo
                allMoviesCount = {data.length}
                favouriteMoviesCount = { data.filter(c => c.favourite).length }
                />
                <div className="search_panel">
                    <SearchPanel
                    updateTermHandler={updateTermHandler}
                    />
                    <AppFilter
                    filter={filter}
                    updateFilterHandler={updateFilterHandler}
                    />
                </div>
                <MovieList
                data={filterhandler(searchHandler(data, term), filter)}
                onDelete={onDelete}
                onToggleProp={onToggleProp}
                />
                <MovieAddForm addForm={addForm} />
            </div>
        </div>
    )

}

const arr = [
    {name: "The Shawshank Redemption", views: 991, favourite: false,like: false, id: 1},
    {name: "The Return of the King", views: 1022, favourite: false, like: true, id: 2},
    {name: "The Two Towers", views: 1099, favourite: true,like: false, id: 3},
]


// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         data: [
//                 {name: "Empiry of Osman", views: 991, favourite: false,like: false, id: 1},
//                 {name: "Ertugul", views: 1022, favourite: false, like: true, id: 2},
//                 {name: "Omar", views: 1099, favourite: true,like: false, id: 3},
//             ],
//         term: "",
//         filter: 'all',
//         } 
//     }



//     onToggleProp = (id, prop) => {
//         this.setState(({data}) => ({
//             data: data.map(item => {
//                 if(item.id === id) {
//                     return { ...item, [prop]: !item[prop] }
//                 }
//                 return item
//             })
//         }))
//     }

//     onDelete = id => {
//         this.setState(({ data }) => ({
//             data: data.filter(c => c.id !== id)
//         }))
//     }

//     addForm = item => {
//         this.setState(({ data }) => ({
//             data: [...data, item],
//         })
//     )}

//     searchHandler = (arr, term) => {
//         if (term.length === 0) {
//             return arr
//         }
//         return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
//     }

//     filterhandler = (arr, filter) => {
//         switch(filter) {
//             case 'popular':
//                 return arr.filter(c => c.like)
//             case 'mostViews':
//                 return arr.filter(c => c.views > 1000)
//             default:
//                 return arr
//         }
//     }

//     updateTermHandler = (term) => this.setState({term })

//     updateFilterHandler = filter => this.setState({ filter })

//     render() {
//         const allMoviesCount = this.state.data.length
//         const favouriteMoviesCount = this.state.data.filter(c => c.favourite).length
//         const {data, term, filter } = this.state
//         const visibleData = this.filterhandler(this.searchHandler(data, term), filter)

//         return (
//             <div className="app font-monospace">
//                 <div className="content">
//                     <AppInfo
//                     allMoviesCount = {allMoviesCount}
//                     favouriteMoviesCount = { favouriteMoviesCount }
//                     />
//                     <div className="search_panel">
//                         <SearchPanel
//                         updateTermHandler={this.updateTermHandler}
//                         />
//                         <AppFilter
//                         filter={filter}
//                         updateFilterHandler={this.updateFilterHandler}
//                         />
//                     </div>
//                     <MovieList
//                     data={visibleData}
//                     onDelete={this.onDelete}
//                     onToggleProp={this.onToggleProp}
//                     />
//                     <MovieAddForm addForm={this.addForm} />
//                 </div>
//             </div>
//         )

//     }
// }

export default App