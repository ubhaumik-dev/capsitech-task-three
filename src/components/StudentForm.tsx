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
   const [formData,setFormData] = useState({
    firstName: '',
    Age:'',
    email: '',
    course: ''
  })
    useEffect(() => {
    const index = props.editIndex;
    if(index !==null)
    {
      //console.log("index is" ,index);
      const item = localStorage.getItem('FormData');
      if(item){
    const array = JSON.parse(item);
    //console.log(array[index]);
    setFormData(array[index]);
    //console.log("values",values);
      }
    }
  }, [])
 
  


  
  return (
    <Formik
     enableReinitialize
      initialValues={formData}
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
    if (props.editIndex === null) {
      
      if (!Array.isArray(parsedData)) {
        parsedData = [];
      }
      parsedData.push(values);
      localStorage.setItem("FormData", JSON.stringify(parsedData));
      navigate('/');
    } else {
      
      if (Array.isArray(parsedData)) {
        parsedData[props.editIndex] = values;
        localStorage.setItem("FormData", JSON.stringify(parsedData));
        props.setEditIndex(null);
        navigate('/');
      }
    }
  }}
    >
      {(formik) => (
        <div className="container max-w-lg w-full mx-auto">
          <form className="form h-auto w-2/4 flex flex-col m-auto mt-20 lg:space-y-4" onSubmit={formik.handleSubmit}>
            <h1 className="heading text-xl font-extrabold md:text-4xl lg:text-5xl"> Student Registration Form</h1>
            <label htmlFor="firstName" className="md:text-xl lg:text-2xl">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your name"
              name='firstName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value = {formik.values.firstName}
              className="md:text-xl lg:text-2xl px-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="md:text-xl lg:text-2xl">{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="Age" className="md:text-xl lg:text-2xl">Age</label>
            <input
              id="Age"
              type="text"
              name='Age'
              placeholder="Enter your age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value = {formik.values.Age}
              className="md:text-xl lg:text-2xl px-2"
            />
            {formik.touched.Age && formik.errors.Age ? (
              <div  className="md:text-xl lg:text-2xl">{formik.errors.Age}</div>
            ) : null}

            <label htmlFor="Email" className="md:text-xl lg:text-2xl">Email</label>
            <input
              id="email"
              type="email"
              name ='email'
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value = {formik.values.email}
              className="md:text-xl lg:text-2xl px-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div  className="md:text-xl lg:text-2xl">{formik.errors.email}</div>
            ) : null}
            <label htmlFor="Course" className="course md:text-xl lg:text-2xl">
              Course
            </label>
            <select id="course"  className="md:text-xl md:w-40 lg:text-xl " onChange={formik.handleChange}  onBlur={formik.handleBlur}  value = {formik.values.course} name='course'>
              <option disabled value="">
                Select a course{" "}
              </option>
              <option className="lg:text-xl" value="Java">Java</option>
              <option className="lg:text-xl" value="C++">C++ </option>
              <option className="lg:text-xl" value="Python">Python </option>
            </select>
            {formik.touched.course && formik.errors.course ? (
              <div  className="md:text-xl lg:text-2xl">{formik.errors.course}</div>
            ) : null}
            <button type="submit" className="submitBtn  mt-10  h-fit w-fit px-6 py-2 bg-blue-600 rounded-lg text-white lg:text-4xl xl:py-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default StudentForm;
