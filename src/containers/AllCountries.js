import { useState, useEffect} from "react";
import CountriesList from "../components/CountriesList";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import CountriesInformationList from "../components/CountriesInformationList";

const AllCountries = () => {

    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState("");
    const [searchCheck, setSearchCheck] = useState(true);
    const [filterList, setFilterList] = useState([]);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }

    useEffect(getCountries, []);


    const addToBucketList = (id) => {
        const addCountryToBL = countries.find(country => country.ccn3 === id);
        addCountryToBL.onBucketList = true;
        const updateCountries = [...countries];
        setCountries(updateCountries);
    }
    
    
    const removeFromBucketList = (id) => {
        const removeCountryFromBL = countries.find(country => country.ccn3 === id);
        removeCountryFromBL.onBucketList = false;
        const updateCountries = [...countries];
        setCountries(updateCountries);
    }

    const addToVisited = (id) => {
        const vistedCountry = countries.find(country => country.ccn3 === id)
        vistedCountry.visited = true;
        const updateCountries = [...countries];
        setCountries(updateCountries);

    };

    const removeFromVisited = (id) => {
        const vistedCountry = countries.find(country => country.ccn3 === id)
        vistedCountry.visited = false;
        const updateCountries = [...countries];
        setCountries(updateCountries);

    };


    const sortCountries = countries.sort(function(a, b) {
        return a.name.common.localeCompare(b.name.common);
     });

    const filteredCountries = 
        sortCountries.filter((countries)=>{
            return countries.name.common.toLowerCase().includes(input.toLowerCase())
        });

        const onSearchChange = (s) => {
            console.log(s.target.value)
            setInput(s.target.value)
        };

        const searchButtonClick = () => {
            if(input.length>0){
            setSearchCheck(false);
            setFilterList(filteredCountries)
            
            } else {
                setSearchCheck(true);
            }
            console.log("search")
        };

        const cancelSearch = () => {
            setFilterList([]);
            setSearchCheck(true);
            console.log("cancelled");
        };

        const navAll = () => {
            setFilterList([]);
        }

        const navBucket = () => {
            const filteredBucket = sortCountries.filter((countries) => { return countries.onBucketList})
            setFilterList(filteredBucket);
        }

        const navVisited = () => {
            const filteredBucket = sortCountries.filter((countries) => { return countries.visited})
            setFilterList(filteredBucket);
        }


            
        const dataToShow = filterList.length > 0 ? filterList : sortCountries;  
    
    return(
        countries ?

        <div>
            <h1 className="title">Bucket List</h1>
            <SearchBar searchChange={onSearchChange} value={input} searchButtonClick={searchButtonClick} 
            cancelSearch={cancelSearch}/>
            <div className="searchBarButton"> {searchCheck === true ? (<BiSearch id="biSearch" onClick={searchButtonClick}/>)
            : (<IoClose id="biSearch" onClick={cancelSearch}/>) } </div>
            <Navbar navAll={navAll} navBucket={navBucket} navVisited={navVisited}/>
            <CountriesList countries={dataToShow} addToBucketList={addToBucketList} removeFromBucketList={removeFromBucketList}
            addToVisited={addToVisited} removeFromVisited={removeFromVisited}/>
            {/* <CountriesInformationList countries={dataToShow}/> */}

        </div>

        :

        <p>loading country...</p>
    )




}

export default AllCountries;