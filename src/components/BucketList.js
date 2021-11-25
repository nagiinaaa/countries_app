const BucketList = ({bucketList, removeFromBucketList}) => {

    return (

        <div className="Country" id="BucketListCountry">
            <img src={bucketList.flags.png} alt="flag" className="Flag"/>
            <h3>Country:</h3>
            <p>{bucketList.name.common}</p>
            <h4>Capital city:</h4>
            <p>{bucketList.capital}</p>
            <h4>Population:</h4>
            <p>{bucketList.population}</p>
            <h4>Visited:</h4>
            <p>{bucketList.visited ? "yes" : "no"}</p>
            <h4>Bucket List:</h4>
            <p>{bucketList ? "yes" : "no"}</p>

            <button onClick={() => removeFromBucketList(bucketList.ccn3)}>Remove From Bucket List</button>
            
        </div>


    )
}

export default BucketList;