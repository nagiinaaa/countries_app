const Country = ({country}) => {


    return (
        <div className="Country">

            <img src={country.flags.png} alt="flag" />
            <h3>Country:</h3>
            <p>{country.name.official}</p>
            <h4>Capital city:</h4>
            <p>{country.capital}</p>
            <h4>Population:</h4>
            <p>{country.population}</p>

            {/* <button onClick={() => addToBucketList(country.id)}>Add To Bucket List</button>
            <button onClick={() => removeFromBucketList(country.id)}>Remove From Bucket List</button> */}

        </div>
    )
}

export default Country;