import React, {useState, useEffect }from 'react'
import moonImg from '../assets/Moon.svg'
import germanFlag from '../assets/Flag_of_Germany.png'
import backImg from '../assets/Back.svg'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'


const Countrydetails = () => {
    const [country,setCountry] = useState([])
    const {ccn3} = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/alpha?codes=${ccn3}`
            )
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }

        fetchCountryData()

    }, [ccn3])
  return (
    <div >
        <Header/>
        {/* <div className=' flex justify-between items-center w-full bg-white py-[32px] px-[15px] shadow-md lg:px-[74px] lg:py-[24px] '>
            <h1 className=' text-primaryBlack font-extrabold text-sm font-nunitoSans lg:text-lg'>Where in the world?</h1>
            <div className='flex items-center justify-center gap-2'>
                <span>
                    <img src={moonImg} alt="Dark Mode" />
                </span>
                <h1 className=' text-primaryBlack text-xs font-semibold font-nunitoSans lg:text-base'>Dark Mode</h1>
            </div>
        </div> */}


        <div className='flex flex-col justify-center items-center gap-12 mx-auto'>
            <div className=' mt-12 items-start w-[320px] lg:w-full lg:pl-20 '>
                <Link to='/'>
                    <button className=' flex gap-2 py-2 px-6 rounded-md shadow-md bg-white text-sm'> 
                        <img src={backImg} alt="Back" />
                        <p className=' font-nunitoSans'>Back</p>
                    </button>
                </Link>
            </div>

            {country.map((item) => (
                        <div key={item.ccn3}className=' w-[320px] flex flex-col gap-8 mb-16 lg:flex-row lg:w-full lg:justify-center lg:mx-auto lg:gap-36 dark:text-white'>
                
                            <span>
                                <img className=' rounded-md w-[320px] lg:w-[600px] lg:h-[420px]' src={item.flags.svg} alt={item.name.common} />
                            </span>

                            <div className=' flex flex-col gap-10'>
                                <div className=' lg:flex gap-20 mt-10'>
                                    <div>
                                        <h2 className=' font-nunitoSans text-primaryBlack text-2xl font-extrabold dark:text-white '>{item.name.common}</h2>
                                        <div className=' flex flex-col gap-5 pt-6'>
                                        <p className='font-light'><span className='font-semibold'>Native Name: </span>{item.name.official}</p>
                                            <p className='font-light'><span className='font-semibold'>Population: </span>{item.population.toLocaleString()}</p>
                                            <p className='font-light'><span className='font-semibold'>Region: </span>{item.region}</p>
                                            <p className='font-light'><span className='font-semibold'>Sub Region: </span>{item.subregion}</p>
                                            <p className='font-light'><span className='font-semibold'>Capital: </span>{item.capital}</p>
                                        </div>
                                    </div>

                                    <div className=' flex flex-col gap-5 lg:pt-[50px] mt-5'>
                                        <p className='font-light'><span className='font-semibold'>Top Level Domain: </span>{item.tld}</p>
                                        <p className='font-light'><span className='font-semibold'>Currencies: </span>{Object.values(item.currencies).map(({name}) => name).join(', ')}</p>
                                        <p className='font-light'><span className='font-semibold'>Languages: </span>{item.languages && Object.values(item.languages).join(', ')}</p>
                                    </div>
                                </div>

                                <div className='lg:flex lg:gap-2 '>
                                    {item.borders && (
                                        <div>
                                        <h3 className='font-nunitoSans text-primaryBlack text-lg font-bold dark:text-white '>Border Countries:</h3>
                                        <div className='flex gap-2 mt-4 lg:justify-start lg:items-start'>
                                            {item.borders.map((border, index) => (
                                            <Link to={`/${border}`} key={index}><button className='py-2 px-5 bg-white shadow-sm rounded-md border text-xs dark:text-black' type='button'>
                                                {border}
                                            </button></Link>
                                            ))}
                                        </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )
                )}
        </div>
    </div>
  )
}

export default Countrydetails