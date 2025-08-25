//import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Data = () => {

const[storedData,setStoredData] = useState('');
useEffect(() => {
  const storedData = localStorage.getItem('FormData');
    if(storedData)
        setStoredData(storedData);
  
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
        
        
    {storedData} 
    
    </div>
    </>
    )
  )
}

export default Data;