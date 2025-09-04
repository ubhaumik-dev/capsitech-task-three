//import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NoData from './NoData';
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
const[filteredData, setFilteredData] = useState<FormData []>([]);
const[filtered, setFiltered] = useState(false);

useEffect(() => {
  let localStorageData = localStorage.getItem('FormData');
    if(localStorageData){
    setStoredData(JSON.parse(localStorageData));
  //console.log("type of storedData",typeof storedData);
      
  }
  setFilteredData(storedData);
  //setData(true);
}, [])

useEffect(() => {
 setFilteredData(filteredData);
},[filteredData])


const handleDelete = (i:number):void =>
{
  setStoredData(existingData =>{
    const updatedData = existingData.filter((item, currenti) => currenti !==i)
    localStorage.setItem('FormData',JSON.stringify(updatedData))
    return updatedData;
  })
 
}
const onChange = (e:any)=>{
  //console.log(e.target.value);
  const filtered = storedData.filter((item)=>{
    if(e.target.value === 'C++')
      return item.course === 'C++'
    else if(e.target.value === 'Java')
      return item.course === 'Java'
    else if(e.target.value === 'Python')
      return item.course === 'Python'
    else
      return item;
  })
  setFiltered(true);
  setFilteredData(filtered);
    console.log("filteredData is",filtered)
}
  return (
   <>
   
    {storedData.length=== 0 ? (
       <NoData/>
      ) : (
        <>
       
          
        <div className=' max-w-screen-lg w-full mx-auto mt-20 '> 
          <div className="container h-10 flex flex-row items-center justify-evenly">
            <p className='font-extrabold md:text-3xl lg:text-4xl'>Submitted Entries</p>
            <Link className="h-fit w-fit px-2 py-2 bg-blue-600 rounded-md text-md text-white hover:bg-blue-800 lg:text-xl xl:text-3xl" id="dataBtn" to="/studentForm" >
              Add New Data
            </Link>
          </div> 
          <div className='container'> 
           <select className=' border-2 border-solid rounded-md mt-4 md:ml-10 md:text-xl lg:mt-10 lg:text-2xl' onChange={onChange}>
            <option className='rounded-md' defaultChecked>All</option>
            <option className='rounded-md' value='C++'> C++</option>
            <option className='rounded-md' value='Java'> Java</option>
            <option className='rounded-md' value='Python'> Python</option>
          </select>
          </div>
          {filtered?  <div className='mt-10'>
           <div className='container  w-full grid grid-cols-6 text-xs font-extrabold mt-10  md:text-lg lg:text-2xl '>
            <p> SL NO.</p>
            <p> NAME</p>
            <p> AGE</p>
            <p> EMAIL</p>
            <p> COURSE</p>
            <p> ACTIONS</p>
          </div>
        <div className='h-fit w-full text-xs bg-amber-200 px-2 py-4 container max-h-auto mt-50  md:text-xl md:py-10 '>
         {filteredData.map((item, i) => (
  <div key={i} className='grid grid-cols-6 space-y-8 md:space-y-10 lg:space-y-14 lg:text-2xl'>
    <p>{i+1}</p>
    <p>{item.firstName}</p>
    <p>{item.Age}</p>
    <p className='max-w-2 truncate'>{item.email}</p>
    <p>{item.course}</p>
    <div className='flex flex-col gap-1 md:flex-row md:gap-3'> 
    <button className='h-fit w-fit px-2 py-1 rounded-lg text-white bg-red-500 hover:bg-red-800' onClick={()=>handleDelete(i)}>Del</button>
    <button className='h-fit w-fit px-2 py-1 rounded-lg text-white bg-green-400 hover:bg-green-600' onClick={() => props.handleEdit(i)}>Edit</button>
    </div>
  </div>
))}
      </div>
      </div>: <>
       <div className='mt-10'>
           <div className='container  w-full grid grid-cols-6 text-xs font-extrabold mt-10  md:text-lg lg:text-2xl '>
            <p> SL NO.</p>
            <p> NAME</p>
            <p> AGE</p>
            <p> EMAIL</p>
            <p> COURSE</p>
            <p> ACTIONS</p>
          </div>
        <div className='h-fit w-full text-xs bg-amber-200 px-2 py-4 container max-h-auto mt-50  md:text-xl md:py-10 '>
         {storedData.map((item, i) => (
  <div key={i} className='grid grid-cols-6 space-y-8 md:space-y-10 lg:space-y-14 lg:text-2xl'>
    <p>{i+1}</p>
    <p>{item.firstName}</p>
    <p>{item.Age}</p>
    <p className='max-w-2 truncate'>{item.email}</p>
    <p>{item.course}</p>
    <div className='flex flex-col gap-1 md:flex-row md:gap-3'> 
    <button className='h-fit w-fit px-2 py-1 rounded-lg text-white bg-red-500 hover:bg-red-800' onClick={()=>handleDelete(i)}>Del</button>
    <button className='h-fit w-fit px-2 py-1 rounded-lg text-white bg-green-400 hover:bg-green-600' onClick={() => props.handleEdit(i)}>Edit</button>
    </div>
  </div>
))}
      </div>
      </div>
      </>}
         
      </div>
    </>
    )}
    
  </>
)}

export default Data;