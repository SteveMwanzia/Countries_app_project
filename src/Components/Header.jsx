import React, { useContext } from 'react'
import moonImg from '../assets/Moon.svg'
import SearchFilter from './SearchFilter'
import sunImg from '../assets/sun.svg'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContextProvider';


const Header = () => {
  const {theme, themeToggler} = useContext(ThemeContext)
  return (
    <>
    <div className=' flex justify-between items-center w-full bg-white py-[32px] px-[15px] shadow-md lg:px-[74px] lg:py-[24px] dark:bg-[#2B3844]  '>
        <h1 className=' text-primaryBlack font-extrabold text-sm font-nunitoSans lg:text-lg dark:text-white'>Where in the world?</h1>
        <div onClick={themeToggler} className='flex items-center justify-center gap-2'>
            <span>
              {
                theme === 'light' ? <img src={moonImg} alt="Dark Mode" /> : <img src={sunImg} alt="Light Mode" />
              }
                {/* <img src={moonImg} alt="Dark Mode" /> */}
            </span>
            <h1 className=' text-primaryBlack text-xs font-semibold font-nunitoSans lg:text-base dark:text-white'>
              {theme === 'light'? 'Dark Mode': 'Light Mode'}
            </h1>
        </div>
    </div>
    {/* <SearchFilter/> */}
    </>
  )
}

export default Header