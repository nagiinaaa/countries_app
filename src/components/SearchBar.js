function searchBar({searchChange, input}) {

    return(
        <div>
            <input className="searchBar" type="search" value = {input} placeholder="search..."  onChange = {searchChange}/>
        </div>
    )

}

export default searchBar;