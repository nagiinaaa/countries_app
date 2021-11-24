import Country from "./Country";

const CountriesList = ({countries, visited}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country country={country} visited={visited}/>
        )
    })

    return(
        <div className="">
            {countryComponents}
        </div>
    )

}

export default CountriesList;