const CountryInformation = ({country}) => {

    return(

    <div className="countryInfo">
        <p>{country.name.common}</p>
        <p>{country.capital}</p>
        <p>{country.continents}</p>
        <p>population: {country.population}</p>
        <p>{country.unMember}</p>
    </div>
    )

}

export default CountryInformation;