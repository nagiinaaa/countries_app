const Navbar = ({navAll, navBucket, navVisited}) => {


    return(
        <div className="navBar">
            <button onClick={navAll}>All</button>
            <button onClick={navBucket}>Bucket List </button>
            <button onClick={navVisited}>Visited</button>
        </div>
    )
}

export default Navbar;