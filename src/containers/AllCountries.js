import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import Country from "../components/Country";

const AllCountries = () => {

    const [countries, setCountries] = useState([]);

    const getCountriesData = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data));
    }

    useEffect(getCountriesData, []);

    const countryToUpdate =(id) =>{countries.find(country => country.id===id)};

    const updateBucket = (id)=>{
        countryToUpdate.bucketList = true;
        fetch(updateBucket).then(getCountriesData)
    }

    const updateVisited = (id)=>{
        countryToUpdate.visited = true;
        fetch(updateVisited).then(getCountriesData)
    
    }

    

    return(
        countries ?

        <div>
            <CountriesList countries={countries} onVisit={updateVisited} onBucket={updateBucket}/>

        </div>

        :

        <p>loading country...</p>
    )




}

export default AllCountries;