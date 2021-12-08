const Country = ({country, addToBucketList, removeFromBucketList, addToVisited, removeFromVisited}) => {


    return (
        <div className="country">

            <img src={country.flags.png} alt="flag" className="flag" />
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
        
           
            
            {country.onBucketList ? 
            (<button onClick={() => removeFromBucketList(country.ccn3)} id="unselectedButton">Remove From Bucket List</button>)
              : (<button onClick={() => addToBucketList(country.ccn3)} id="selectedButton">Add To Bucket List</button>) }
            {country.visited ?  
            (<button onClick={() => removeFromVisited(country.ccn3)} id="unselectedButton"> Not visted </button>) : 
            (<button onClick={() => addToVisited(country.ccn3)} id="selectedButton"> Visted </button>) }
            
        
        {
            //<button onClick={() => addToVisited(country.id)}>Mark as Visited</button>
        }

        </div>
    )
}

export default Country;