//import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Data = () => {

type FormData ={
  firstName: string,
  Age: string,
  email: string,
  course: string
}
const[storedData,setStoredData] = useState<FormData[]>([]);
useEffect(() => {
  let localStorageData = localStorage.getItem('FormData');
    if(localStorageData){
    setStoredData(JSON.parse(localStorageData));
  console.log("type of storedData",typeof storedData);
console.log("storedData", storedData)
console.log("localStorageData", localStorageData )
 // console.log("typeof localStorageData", typeof localStorageData);
//  console.log("entries of localStorageData",localStorageData);
//  const myArray = localStorageData.split(",");
//  console.log(myArray);
//  console.log("type of myArray",typeof myArray);
  }
}, [])
//const variable = localStorage.getItem('FormData');

  return (
   <>
    {!storedData ? (
        <div className="NoData">
          <p>No Data Yet</p>
          <Link className="addNew" to="/studentForm">
            Add New Data
          </Link>
        </div>
      ) : (
        <>
          <div className="Data">
            <p>Submitted Entries</p>
            <Link className="addNew" id="dataBtn" to="/studentForm">
              Add New Data
            </Link>
          </div>
           <div className='grid grid-cols-6 font-extrabold'>
            <p> SL NO.</p>
            <p> NAME</p>
            <p> AGE</p>
            <p> EMAIL</p>
            <p> COURSE</p>
            <p> ACTIONS</p>
          </div>
        <div className='h-full w-full bg-amber-500 px-2 py-2'>
         {storedData.map((item, i) => (
  <div key={i} className='grid grid-cols-7'>
    <p>{i+1}</p>
    <p>{item.firstName}</p>
    <p>{item.Age}</p>
    <p className='text-ellipsis'>{item.email}</p>
    <p>{item.course}</p>
    <div className='flex ml-14'> 
    <button className='h-fit w-fit px-2 py-2'>del</button>
    <button className='h-fit w-fit px-2 py-2'>edit</button>
    </div>
  </div>
))}
      </div>
    </>
    )}
  </>
)}

export default Data;