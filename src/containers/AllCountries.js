import { useState, useEffect} from "react";
import BucketList from "../components/BucketList";
import BucketListDisplay from "../components/BucketListDisplay";
import CountriesList from "../components/CountriesList";
import Country from "../components/Country";
import SearchBar from "../components/SearchBar";

const AllCountries = () => {

    const [countries, setCountries] = useState([]);
    const [bucketList, setBucketList] = useState([]);
    const [input, setInput] = useState(``);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }

    useEffect(getCountries, []);


    const addToBucketList = (id) => {
        const addCountryToBL = countries.find(country => country.ccn3 === id);
        
        if(!bucketList.includes(addCountryToBL)){
            console.log("added");
            const newBucketList = [...bucketList];
            newBucketList.push(addCountryToBL);
            setBucketList(newBucketList);
            const newCountries = [...countries];
            newCountries.splice(countries.indexOf(addCountryToBL), 1);
            setCountries(newCountries);  
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
            const newBucketList = [...bucketList];
            newBucketList.splice(bucketList.indexOf(removeCountryFromBL), 1);
            setBucketList(newBucketList);
            const newCountries = [...countries];
            newCountries.push(removeCountryFromBL);
            setCountries(newCountries);
        } else {
            console.log("country isn't on bucket list")
        }

        console.log(bucketList.length);
        console.log(countries.length);
    }


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


    const bucketListClick = () => {
        const newCountries = [];
        setCountries(newCountries);
        console.log("clicked");
    }

    const allCountriesList = () => {
        getCountries();
        const newBucketList = [];
        setBucketList(newBucketList);
        console.log("all clicked")
    }

    const addToVisited = (id) => {
        const vistedCountry = countries.find(country => country.ccn3 === id)
        vistedCountry.visited = true;
        const newCountries = [...countries];
        setCountries(newCountries);

    }

    const removeFromVisited = (id) => {
        const vistedCountry = countries.find(country => country.ccn3 === id)
        vistedCountry.visited = false;
        const newCountries = [...countries];
        setCountries(newCountries);

    }


        
    return(
        countries ?

        <div>
            <h1>Bucket List</h1>
            <SearchBar searchChange={onSearchChange} value={input} bucketListClick={bucketListClick} 
            allCountriesList={allCountriesList}/>
            <BucketListDisplay bucketList={sortBL} removeFromBucketList={removeFromBucketList}/>
            <CountriesList countries={filteredCountries} addToBucketList={addToBucketList} 
            addToVisited={addToVisited} removeFromVisited={removeFromVisited}/>

        </div>

        :

        <p>loading country...</p>
    )




}

export default AllCountries;