import StudentForm from './components/StudentForm'
import './App.css'
import Data from './components/Data';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
<Routes>
   <Route path="/" element={<Data />} />
   <Route path='studentForm' element={<StudentForm/>}/>
</Routes>
    </>
  )
}

export default App
