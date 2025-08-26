//import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Data = () => {

//let localStorageData = JSON.parse(localStorage.getItem('FormData'));
const[storedData,setStoredData] = useState([]);
useEffect(() => {
  let localStorageData = localStorage.getItem('FormData');
    if(localStorageData)
    setStoredData(JSON.parse(localStorageData));
}, [])
const variable = localStorage.getItem('FormData');
  return (
    (variable===null) ? 
    (   <> 
        <div className='NoData'> 
        <p> No Data Yet</p>
        <Link className="addNew" to='/studentForm'>Add New Data</Link>
        </div>
        </>
    ) : 
    (
    <>
    <div className='Data'> 
    <p> Submitted Entries </p>
    <Link className="addNew" id='dataBtn' to='/studentForm'>Add New Data</Link>
    </div>
    
    <div>
        
    {Object.keys(storedData).map((entry,index)=>(
      <div key={index}>
       <h3>{index}</h3>
      </div>
    ))}
    
    </div>
    </>
    )
  )
}

export default Data;