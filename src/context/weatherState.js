import React , {useReducer}from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import axios from 'axios';
import 
{
    SET_DATA
} from './types'

const WeatherState = (props) => {
const initialState = {
data :null,
loading: false,
dataLoaded : false
}
const [state, dispatch] = useReducer(WeatherReducer, initialState);

const setData = async city =>{
    state.loading = false
   await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=fc783bab20534b3490d102742201706&q=${city}&days=1`)
    .then(res=> dispatch({type: SET_DATA, payload: res.data}))
    .catch(err=>console.log(err));

}
    return (
        <WeatherContext.Provider value= {{
            data: state.data,
            setData,
            loading: state.loading,
            dataLoaded : state.dataLoaded
        }}>
            {
                props.children
            }
        </WeatherContext.Provider>
    )
}

export default WeatherState
