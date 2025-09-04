import image from '../assets/image.jpg';
import { Link } from 'react-router-dom';

const NoData = () => {
  return (
    <>
      <div className='h-screen max-w-screen-lg w-full mx-auto'> 
      <div className="h-1/2 flex flex-row justify-evenly items-center">
        <p className="font-bold text-lg lg:text-3xl xl:text-4xl">No Data Yet</p>
        <Link
          className="addNew h-fit w-fit px-6 py-2 bg-blue-600 rounded-md text-white lg:text-xl xl:text-2xl"
          to="/studentForm"
        >
          Add New Data
        </Link>
      </div>
      <div className='flex items-center justify-center'>
      <img src={image} alt="no-data" className="h-1/2 w-1/2 md:h-2/7 md:w-2/7" />
    </div>
    </div>
    </>
  );
};

export default NoData;
