import React, {useState} from 'react'
import './search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"

function Search() {
    const [data, setData] = useState("")

    const search =(e)=>{
        e.preventDefault();
        setData(e.target.value)
        console.log('you entered',data);
       
    }
  return (
    <div className='search'>
        <div className="search_input">
            <SearchIcon className="search_inputIcon" />
            <input name="data" value={data} onChange={search} placeholder="Search or type a URL"/>
            <MicIcon/>
        </div>
    </div>
  )
}

export default Search