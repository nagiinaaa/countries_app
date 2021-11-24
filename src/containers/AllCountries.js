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

    const updateBucket = (id)=>{
        const countryToUpdate = countries.find(country => country.id === id);
        countryToUpdate.bucketList = true;
    
    }

    const updateVisited = (id)=>{
        const countryToUpdate = countries.find(country => country.id === id);
        countryToUpdate.visited = true;
    
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