import  "./app-filter.css"

const AppFilter = ({ updateFilterHandler, filter }) => {
    return <div className="btn-group">
        { btnsArr.map(btn => (
            <button key={btn.name} onClick={() => updateFilterHandler(btn.name)} 
            className={`btn ${filter === btn.name ? 'btn-primary' : 'btn-outline-primary' }`}>
                { btn.label } 
            </button>
        ) )}
    </div>
}

const btnsArr = [
    {name: "all", label: "All movies"},
    {name: "popular", label: "Favourite movies"},
    {name: "mostViews", label: "Most watched movies"},
]

export default AppFilter