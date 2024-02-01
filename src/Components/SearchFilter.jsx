import React,{ useState } from 'react'
import searchIcon from '../assets/Search.svg'
import CountryItems from './CountryItems'

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');


  return (
    <>
    <div className='flex flex-col gap-[35px] lg:flex lg:justify-between lg:mt-6 lg:items-center lg:flex-row'>
        <div className=' flex gap-8 py-4 bg-white dark:bg-[#2B3844]  mt-6 mx-5 pl-8 rounded-md shadow-md lg:w-[450px] lg:ml-20'>
            <img src={searchIcon} alt="Search Countries" />
            <input className='font-nunitoSans dark:text-white dark:bg-[#2B3844]' type="text" placeholder='Search for a country…' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className=' rounded-md shadow-md ml-5 py-4 pl-6  bg-white w-[200px] lg:mr-20 dark:bg-[#2B3844] '>
        <select className='font-nunitoSans pr-10 text-sm dark:text-white dark:bg-[#2B3844] ' value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="Filter by Region" hidden >Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Oceania">Antarctic</option>
        </select>
        </div>
    </div>
    <CountryItems searchTerm={searchTerm} selectedRegion={selectedRegion}/>
    </>
  )
}

export default SearchFilter