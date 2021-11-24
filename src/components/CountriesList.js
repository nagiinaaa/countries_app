import Country from "./Country";

const CountriesList = ({countries, visited, addToBucketList}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country country={country} key={country.ccn3} 
            visited={visited} addToBucketList={addToBucketList} 
            
            />
        )
    })

    return(
        <div className="">
            {countryComponents}
        </div>
    )

}

export default CountriesList;