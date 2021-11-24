function searchBar({searchChange}) {

    return(
        <div>
            <input type="search" placeholder="search..." onChange = {searchChange} />
        </div>
    )

}

export default searchBar;