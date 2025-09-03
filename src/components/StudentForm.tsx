import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
interface EditFormProps{
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number|null>>
}



const StudentForm = (props: EditFormProps) => {
  const navigate = useNavigate();
   const [values,setValues] = useState({
    firstName: '',
    Age:'',
    email: '',
    course: ''
  })
    useEffect(() => {
    const index = props.editIndex;
    if(index !==null)
    {
      console.log("index is" ,index);
      const item = localStorage.getItem('FormData');
      if(item!== null){
    const array = JSON.parse(item);
    console.log(array[index]);
    setValues(array[index]);
    //console.log("values",values);
      }
    }
  }, [])
 
  
 function handleChange(e:any)
  {
    let value = e.target.value;
    let name = e.target.name;
    console.log(value);
    console.log(name);
    setValues((preValue) =>{
      return {
        ...preValue,
        [name]:value
      }
    })
  }

  
  return (
    <Formik
      initialValues={{ firstName: "", Age: "", email: "", course: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        Age: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        course: Yup.string()
          .required("Please select an option.")
          .oneOf(["Java", "C++", "Python"], "Invalid option selected."),
      })}
    onSubmit={(values) => {
   
        const storedData = localStorage.getItem("FormData");
      let parsedData = storedData ? JSON.parse(storedData) : [];
      if (!Array.isArray(parsedData)) {
        parsedData = [];
      }
      parsedData.push(values);
      localStorage.setItem("FormData", JSON.stringify(parsedData));
      navigate('/')
    }}
      
    >
      {(formik) => (
        <div className="body max-w-lg w-full mx-auto">
          <form className="form" onSubmit={formik.handleSubmit}>
            <h1 className="heading"> Student Registration Form</h1>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your name"
              name='firstName'
              onChange={handleChange}
              value = {values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="Age">Age</label>
            <input
              id="Age"
              type="text"
              name='Age'
              placeholder="Enter your age"
              onChange={handleChange}
              value = {values.Age}
            />
            {formik.touched.Age && formik.errors.Age ? (
              <div>{formik.errors.Age}</div>
            ) : null}

            <label htmlFor="Email">Email</label>
            <input
              id="email"
              type="email"
              name ='email'
              placeholder="Enter your email"
              onChange={handleChange}
              value = {values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="Course" className="course">
              Course
            </label>
            <select id="course"   onChange={handleChange} value = {values.course} name='course'>
              <option disabled value="">
                Select a course{" "}
              </option>
              <option value="Java">Java</option>
              <option value="C++">C++ </option>
              <option value="Python">Python </option>
            </select>
            {formik.touched.course && formik.errors.course ? (
              <div>{formik.errors.course}</div>
            ) : null}
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default StudentForm;
