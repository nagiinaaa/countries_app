const Country = ({country,onVisit}) => {


    return (
        <div className={country.visited ? "Country" : "VisitedCountry"}>

            <img src={country.flags.png} alt="flag" />
            <h3>Country:</h3>
            <p>{country.name.common}</p>
            <h4>Capital city:</h4>
            <p>{country.capital}</p>
            <h4>Population:</h4>
            <p>{country.population}</p>
            <h4>Visited:</h4>
            <p>{country.visited ? "yes" : "no"}</p>

            { //<button onClick={() => addToBucketList(country.id)}>Add To Bucket List</button>
            //<button onClick={() => removeFromBucketList(country.id)}>Remove From Bucket List</button>
        }
        {<button onClick={() => addToVisited(country.id)}>Mark as Visited</button>}

        </div>
    )
}

export default Country;