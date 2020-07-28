import React, {useState, useContext} from 'react';
import weatherContext from '../context/weatherContext';


const Navbar = () => {

    const {setData} = useContext(weatherContext);
    const [city, setCity] = useState('');
    const handleChange = (e)=>setCity({
        [e.target.name]: e.target.value
    })

    const onSubmit = (e)=>{
        e.preventDefault();
        setData(city.city);
      setCity('');
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Weather App</a>
            <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Seach a City" value={city.city} aria-label="Search" name="city" onChange={handleChange}/>
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
        </nav>
        </div>
    )
}

export default Navbar
