const Country = ({country,onVisit,onBucket}) => {


    return (
        <div className={country.bucketList ? "BucketListCountry" : "Country"}> 

        <div className={country.visited ? "VisitedCountry" : "Country"}>
            
                <img className="Flag" src={country.flags.png} alt="flag" />
                <h3>Country:</h3>
                <p>{country.name.common}</p>
                <h4>Capital city:</h4>
                <p>{country.capital}</p>
                <h4>Population:</h4>
                <p>{country.population}</p>
                <h4>Visited:</h4>
                <p>{country.visited ? "yes" : "no"}</p>
                <h4>Bucket List Status:</h4>
                <p>{country.bucketList ? "yes": "no"}</p>
                             
                <button onClick={() => onBucket(country.id)}>Add To Bucket List</button>
            
                <button onClick={() => onVisit(country.id)}>Mark as Visited</button>
                
            
            </div>
        </div>
    )
}

export default Country;