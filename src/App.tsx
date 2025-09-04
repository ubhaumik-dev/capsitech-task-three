import StudentForm from './components/StudentForm'
import './App.css'
import Data from './components/Data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
const [editIndex, setEditIndex] = useState<number|null>(null);


const navigate = useNavigate();
const handleEdit = (i:number) =>{
  const editIndex =i;
  setEditIndex(editIndex);
  //console.log(editIndex);
  navigate("studentForm");
}
  return (
    <>
<Routes>
   <Route path="/" element={<Data handleEdit = {handleEdit}/>} />
   <Route path='studentForm' element={<StudentForm editIndex={editIndex} setEditIndex={setEditIndex}  />}/>
</Routes>
    </>
  )
}

export default App
