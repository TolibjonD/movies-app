import "./app-info.css"

const AppInfo = ({ allMoviesCount, favouriteMoviesCount }) => {
    return <div className="appInfo">
        <p className="fs-3 text-uppercase">All movies: <spa className="text-dark fw-bold">{ allMoviesCount }</spa></p>
        <p className="fs-4 text-uppercase">Favourite movies: <span className="text-dark fw-bold">{favouriteMoviesCount}</span> </p>
    </div>
}

export default AppInfo