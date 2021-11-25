function searchBar({searchChange, bucketListClick, allCountriesList}) {

    return(
        <div>
            <input type="search" placeholder="search..." onChange = {searchChange} />
            <button onClick={() => allCountriesList()}> Show all </button>
            <button onClick={() => bucketListClick()}> BucketList </button>
        </div>
    )

}

export default searchBar;