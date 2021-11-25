import Country from "./Country";

const CountriesList = ({countries, addToVisited, addToBucketList, removeFromVisited}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country country={country} key={country.ccn3} 
            addToVisited={addToVisited} removeFromVisited={removeFromVisited}
            addToBucketList={addToBucketList} 
            
            
            />
        )
    })

    return(
        <div className="CountriesList">
            {countryComponents}
        </div>
    )

}

export default CountriesList;