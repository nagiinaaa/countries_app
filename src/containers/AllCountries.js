import { useState, useEffect } from "react";
import BucketList from "../components/BucketList";
import BucketListDisplay from "../components/BucketListDisplay";
import CountriesList from "../components/CountriesList";
import Country from "../components/Country";
import SearchBar from "../components/SearchBar";

const AllCountries = () => {

    const [countries, setCountries] = useState([]);
    const [bucketList, setBucketList] = useState([]);
    const [input, setInput] = useState(``);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
        
    }, []);


    const addToBucketList = (id) => {
        const addCountryToBL = countries.find(country => country.ccn3 === id);

        if(!bucketList.includes(addCountryToBL)){
            console.log("added");
            bucketList.push(addCountryToBL);            
            countries.splice(countries.indexOf(addCountryToBL), 1);
            
        } else {
            console.log("country already in bucket list");
        }
        console.log(bucketList.length);
        console.log(countries.length);
                
    }


    const removeFromBucketList = (id) => {
        const removeCountryFromBL = bucketList.find(country => country.ccn3 === id);

        if(bucketList.includes(removeCountryFromBL)){
            console.log("removed");
            bucketList.splice(bucketList.indexOf(removeCountryFromBL), 1);
            countries.push(removeCountryFromBL);
        } else {
            console.log("country isn't on bucket list")
        }

        console.log(bucketList.length);
        console.log(countries.length);
    }

    

    // const checkIfInBucketList = (id) => {
    //     const inList = BucketList.find(country => country.ccn3 === id);

    //     if(BucketList.includes(inList)){
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    const onSearchChange = (s) => {
        console.log(s.target.value)
        setInput(s.target.value)
    }

    const sortCountries = countries.sort(function(a, b) {
        return a.name.common.localeCompare(b.name.common);
     });

     const sortBL = bucketList.sort(function(a, b) {
        return a.name.common.localeCompare(b.name.common);
     });

    const filteredCountries = 
        sortCountries.filter((countries)=>{
            return countries.name.common.toLowerCase().includes(input.toLowerCase())

        })

        
    return(
        countries ?

        <div>
            <h1>Bucket List</h1>
            <SearchBar searchChange={onSearchChange} value={input}/>
            <BucketListDisplay bucketList={sortBL} removeFromBucketList={removeFromBucketList}/>
            <CountriesList countries={filteredCountries} addToBucketList={addToBucketList} />

        </div>

        :

        <p>loading country...</p>
    )




}

export default AllCountries;