import "./search-panel.css"
import { useState } from "react"

const SearchPanel = (props)  => {
    const [term, setTerm] = useState('')

    const updateTermHandler = (e) => {
        const term = e.target.value
        setTerm({ term })
        props.updateTermHandler(term)
    }

    
        return <input type="text" name="" id="" className="form-control search-input" placeholder="Search movie..." 
        onChange={updateTermHandler}
        value={term}
        />
    }

export default SearchPanel