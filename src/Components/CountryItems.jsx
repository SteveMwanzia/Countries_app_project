import React, { useEffect, useState } from 'react'
import germanFlag from '../assets/Flag_of_Germany.png'
import { Link } from 'react-router-dom';


const CountryItems = ({searchTerm,selectedRegion}) => {

  const url = 'https://restcountries.com/v3.1/all'
  
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries,setCountries] = useState([])

  const fetchCountrydata = async() => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      // const first50Countries = countries.slice(0, 56)
      setCountries(countries)
      setFilteredCountries(countries)
      
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
    
  }


  useEffect (()=>{
    fetchCountrydata()
  }, [])

  useEffect(() => {
    // Filter countries based on search term and selected region
    const updatedFilteredCountries = countries.filter((country) => {
      const { name, region } = country;
      const matchesSearch = name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === '' || region.includes(selectedRegion);
      return matchesSearch && matchesRegion;
    });

    setFilteredCountries(updatedFilteredCountries);
  }, [searchTerm, selectedRegion, countries]);

  return (
    <> 
    <div className=' mt-10 flex flex-col w-full justify-center items-center gap-8 lg:grid lg:grid-cols-4 lg:gap-16 lg:mx-auto lg:justify-center lg:justify-items-center lg:pb-12 lg:px-16'>
      {filteredCountries.map((country) => {
        const {ccn3, name, population, region, capital, flags } = country
        return (
          <div key={ccn3} className=' flex flex-col gap-2 justify-center  bg-white rounded-md shadow-md h-[360px] w-[330px] pb-12 dark:bg-[#2B3844] dark:text-white'>
            <Link to={`/${ccn3}`}>
            <span className=' rounded-md'>
              <img className=' w-full h-[190px] rounded-t-md' src={flags.png} alt={flags} />
            </span>
          
            <h2 className=' font-nunitoSans text-lg font-extrabold pl-6 mt-3'>{name.common}</h2>
          

            <div className=' items-start font-nunitoSans flex flex-col gap-3 pl-6 mt-3'>
              <p className='font-light'><span className='font-semibold'>Population: </span>{population.toLocaleString()}</p>
              <p className='font-light'><span className='font-semibold'>Region: </span>{region}</p>
              <p className='font-light'><span className='font-semibold'>Capital: </span>{capital}</p>
            </div>
            </Link>
            
        </div>
        )
      })}

      
    </div>
    </>
  )
}


export default CountryItems