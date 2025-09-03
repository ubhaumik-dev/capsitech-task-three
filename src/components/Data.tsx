//import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

type DataProps = {
  handleEdit: (i:number) => void;
}
const Data = (props:DataProps) => {

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

  }
}, [])




const handleDelete = (i:number):void =>
{
  setStoredData(existingData =>{
    const updatedData = existingData.filter((item, currenti) => currenti !==i)
    localStorage.setItem('FormData',JSON.stringify(updatedData))
    return updatedData;
  })
 
}

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
       
          
        <div className='h-screen w-screen mt-20 '> 
          <div className="Data">
            <p>Submitted Entries</p>
            <Link className="addNew" id="dataBtn" to="/studentForm">
              Add New Data
            </Link>
          </div> 
           <select className='border-2 border-solid rounded-md'>
            <option className='rounded-md'> C++</option>
            <option className='rounded-md'> Java</option>
            <option className='rounded-md'> Python</option>
          </select>
          
           <div className='grid grid-cols-6 text-xs font-extrabold mt-10'>
            <p> SL NO.</p>
            <p> NAME</p>
            <p> AGE</p>
            <p> EMAIL</p>
            <p> COURSE</p>
            <p> ACTIONS</p>
          </div>
        <div className='h-fit w-screen text-xs  bg-amber-200 px-2 py-4 container max-h-auto mt-40 '>
         {storedData.map((item, i) => (
  <div key={i} className=' grid grid-cols-6 gap-y-10'>
    <p>{i+1}</p>
    <p>{item.firstName}</p>
    <p>{item.Age}</p>
    <p className='max-w-2 truncate'>{item.email}</p>
    <p>{item.course}</p>
    <div className='flex flex-col gap-1'> 
    <button className='h-fit w-fit px-2 py-2 rounded-lg text-white bg-red-500 hover:bg-red-800' onClick={()=>handleDelete(i)}>Del</button>
    <button className='h-fit w-fit px-2 py-2 rounded-lg text-white bg-green-400 hover:bg-green-600' onClick={() => props.handleEdit(i)}>Edit</button>
    </div>
  </div>
))}
      </div>
      </div>
    </>
    )}
    
  </>
)}

export default Data;