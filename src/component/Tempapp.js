import React, { useEffect, useState } from 'react';
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lakhimpur")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9c09f72a31da6489e9887a6440af8bcd`
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log(resjson);
            setCity(resjson.main);

        };


        fetchApi();
    }, [search])
    return (
        <>
            <div className="main_div">
                <div className="input_data">
                    <br />
                    <br />
                    <input type="search" placeholder="enter city name" onChange={(event) => { setSearch(event.target.value) }} />
                    <br />
                {!city ? (<p className="error">No data found</p>) :
                    (
                        <div>
                            <div className="info">
                                <h3 className="location"><i class="fa fa-street-view" aria-hidden="true"></i>{search}</h3>
                                <h2 className="temp">{city.temp}°C</h2>
                                <h4 className="tempmin-max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h4>
                            </div>
                            <div className="ocean">
                                <div className="wave"></div>
                                <div className="wave"></div>
                            </div>
                        </div>
                    )

                }
                </div>

            </div>

        </>
    )
}
export default Tempapp;