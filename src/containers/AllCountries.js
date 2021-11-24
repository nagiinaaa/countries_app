import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import Country from "../components/Country";

const AllCountries = () => {

    const [countries, setCountries] = useState([]);

    useEffect (() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }, []); 

    

    return(
        countries ?

        <div>
            <CountriesList countries={countries} />

        </div>

        :

        <p>loading country...</p>
    )




}

export default AllCountries;