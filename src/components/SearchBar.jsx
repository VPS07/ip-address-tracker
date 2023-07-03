import React from 'react';
import axios from 'axios';
import arrowIcon from '../assets/icon-arrow.svg';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../AppContext';

function SearchBar({ setCenter }) {
    const [ipAddress, setIpAddress] = useState();
    const [ip, setIp] = useState("");
    const [location, setLocation] = useState("Brooklyn, NY 10001");
    const [timezone, setTimezone] = useState("UTC -05:00");
    const [isp, setIsp] = useState("Verizon Communications");
    const mapRef = useContext(AppContext);

    function handleClick() {
        fetchIpAddress();
        setIpAddress("");
    }

    async function fetchIpAddress() {

        const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        console.log(response)
        const data = response.data;
        console.log(data);
        setLocation(data.country_name);
        setIsp(data.org);
        setTimezone(data.timezone);
        setIp(data.ip);

        const newMarkerPosition = [data.latitude, data.longitude];
        setCenter(newMarkerPosition);
        mapRef.current.setView(newMarkerPosition, 17);
        console.log(data.latitude, data.longitude);
    }


    return (
        <div className='bg-img-desktop bg-cover bg-no-repeat xlg'>
            <h1 className='text-white font-semibold text-2xl sm:text-[1.9rem] text-center pt-2 sm:pt-4'>IP Address Tracker</h1>
            <div className='flex justify-center pt-5'>
                <input type="text" name='ipAddress' value={ipAddress} onChange={e => setIpAddress(e.target.value)} className='outline-none h-11 w-[16rem] sm:w-[31rem] p-6 sm:p-7 rounded-s-xl sm:rounded-s-2xl sm:text-lg' placeholder='Search for any IP address' />
                <button className='bg-black hover:bg-[#3f3f3f] h-12 sm:h-14 rounded-e-xl sm:rounded-e-2xl px-5 sm:px-6 outline-none' onClick={handleClick}>
                    <img src={arrowIcon} alt="image" />
                </button>
            </div>

            {/* Display Location Information */}
            <div className='info__card'>
                <div className='space-y-2 sm:w-52'>
                    <p className='info__head'>IP ADDRESS</p>
                    <p className='info'>{ip || "63.111.200.0"}</p>
                </div>

                <div className='info__container sm:w-52'>
                    <p className='info__head'>LOCATION</p>
                    <p className='info'>{location}</p>
                </div>

                <div className='info__container'>
                    <p className='info__head'>TIMEZONE</p>
                    <p className='info'>{timezone}</p>
                </div>

                <div className='info__container md:w-44 lg:w-56'>
                    <p className='info__head'>ISP</p>
                    <p className='info'>{isp}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar