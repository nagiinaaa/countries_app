import { useState, useEffect } from "react";
import BucketList from "./BucketList";


const Country = ({country, addToBucketList, onVisit, bucketList}) => {


    return (
        <div className="country">

            <img src={country.flags.png} alt="flag" />
            <h3>Country:</h3>
            <p>{country.name.common}</p>
            <h4>Capital city:</h4>
            <p>{country.ccn3}</p>
            <h4>Population:</h4>
            <p>{country.population}</p>
            <h4>Visited:</h4>
            <p>{country.visited ? "yes" : "no"}</p>
            <h4>Bucket List:</h4>
            <p>{bucketList ? "yes" : "no"}</p>
           
            
            <button onClick={() => addToBucketList(country.ccn3)}>Add To Bucket List</button>
            
        
        {
            //<button onClick={() => addToVisited(country.id)}>Mark as Visited</button>
        }

        </div>
    )
}

export default Country;