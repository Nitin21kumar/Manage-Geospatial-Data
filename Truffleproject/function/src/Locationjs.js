import { geolocation } from "navigator";
import React, {useState} from "react";
import { setGeo } from "./Web3_functions";
import "./Locatonjs.css";
// import imge from './b.jpeg'

window.globallatt=0;
window.globallong =0;


function Locationjs({account, contractInstance}){
    const [size, setSize] =useState('large');
    const[lat, setLat] =useState(null);
    const[long, setLong] =useState(null);
    const [status, setstatus] =useState(null);


    async function sendBlockchain(){

        await setGeo(contractInstance, account, window.globallatt, window.globallong);
        // await setGeo(contractInstance, account, lat, long)

    }

    const getLocation =()=>{
        if(!navigator.geolocation){
            setstatus("GeoLocation is not supported");

        }
        else{
            setstatus('Location...');
            navigator.geolocation.getCurrentPosition((position)=>{
                setstatus(null);
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                setSize(window.globallatt =position.coords.latitude);
                setSize(window.globallong =position.coords.longitude);
            }, ()=>{
                setstatus("Unable to retrive your Location")
            });
        }
    }

    return(
        <div className="App">

        <div className='App-l'>
        <h1> Get Your Location From Here </h1>
        
        <button onClick={getLocation} > <span> Click Here</span></button>
        <p>{status}</p>
            {lat && <p>Latitude:{lat}</p>}
            {long && <p>Longitude:{long}</p>}

        <button onClick={sendBlockchain} size ={size}><span>Submit </span> </button>
        </div>
        
      {/* <div className='bubbles'>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>
        <img src={imge} className='bubb-img'/>


      </div> */}
      </div>


    )
}

export default Locationjs

































