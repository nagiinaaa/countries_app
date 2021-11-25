import { useState, useEffect } from "react";
import BucketList from "./BucketList";


const Country = ({country, addToBucketList, addToVisited, removeFromVisited}) => {


    return (
        <div className="Country">

            <img src={country.flags.png} alt="flag" className="Flag" />
            <h3>Country:</h3>
            <p>{country.name.common}</p>
            <h4>Capital city:</h4>
            <p>{country.capital}</p>
            <h4>Population:</h4>
            <p>{country.population}</p>
            <h4>Visited:</h4>
            <p>{country.visited ? "yes" : "no"}</p>
            <h4>Bucket List:</h4>
            <p>{country.onBucketList ? "yes" : "no"}</p>
           
            
            <button onClick={() => addToBucketList(country.ccn3)}>Add To Bucket List</button>
            <button onClick={() => addToVisited(country.ccn3)}> Visted </button>
            <button onClick={() => removeFromVisited(country.ccn3)}> Not visted </button>
            
        
        {
            //<button onClick={() => addToVisited(country.id)}>Mark as Visited</button>
        }

        </div>
    )
}

export default Country;