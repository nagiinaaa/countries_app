import Country from "./Country";

const CountriesList = ({countries, addToVisited, removeFromBucketList, addToBucketList, removeFromVisited}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country country={country} key={country.ccn3} 
            addToVisited={addToVisited} removeFromVisited={removeFromVisited}
            addToBucketList={addToBucketList} removeFromBucketList={removeFromBucketList}
            
            
            />
        )
    })

    return(
        <div className="countriesList">
            {countryComponents}
           
        </div>
    )

}

export default CountriesList;