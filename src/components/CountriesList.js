import Country from "./Country";

const CountriesList = ({countries, onVisit, onBucket}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country country={country} onVisit={onVisit} onBucket={onBucket}/>
        )
    })

    return(
        <div className="CountriesList">
            {countryComponents}
        </div>
    )

}

export default CountriesList;