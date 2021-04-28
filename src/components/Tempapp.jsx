import React, { useEffect, useState } from 'react'
import StreetviewIcon from '@material-ui/icons/Streetview';
import "./SASS/Tempapp.scss"


const Tempapp = () => {

    const [city,setCity]=useState(null);
    const [search, setSearch] = useState("Dhaka")
    
    const inputEvent = (event) => {
        setSearch(event.target.value)
    }

    useEffect (()=>{
        const fetchAPI = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8b0a515401f1def6cc984ec764e92f2e`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
        }
        fetchAPI();
    },[search])

    return (
        <React.Fragment>
            <div className="box">
                <div className="inputData">
                        <input
                        type="search"
                        className="inputFeild"
                        value = {search}
                        // name = "name"
                        onChange={inputEvent}
                        />
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className="info">
                    <h2 className="location">
                        <StreetviewIcon color="primary"/>{search}</h2>

                        <h1 className="temp">
                                {city.temp}℃ 
                        </h1>
                        <h3 className="tempmin_max">
                                Min : {city.temp_min}℃  | Max : {city.temp_max}℃
                        </h3>
                </div>
                    )
                }
                
            
            <div className="wave -one"></div>
            <div className="wave -one"></div>
            <div className="wave -one"></div>
            </div>

        </React.Fragment>
    )
}

export default Tempapp;
