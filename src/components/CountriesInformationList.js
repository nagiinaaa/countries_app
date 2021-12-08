import CountryInformation from "./CountryInformation";

const CountriesInformationList = ({countries}) => {

    const countryInfoComponents = countries.map(country => {
        return(
            <CountryInformation country={country} />
        )
    });

    return (
        <div className="countriesInfoList">{countryInfoComponents}</div>
    )
        

}

export default CountriesInformationList;
