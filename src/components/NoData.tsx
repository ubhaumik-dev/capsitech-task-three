import image from '../assets/image.jpg';
import { Link } from 'react-router-dom';

const NoData = () => {
  return (
    <>
      <div className='h-screen w-full'> 
      <div className="h-1/2 flex flex-row justify-evenly items-center">
        <p className="font-bold text-lg">No Data Yet</p>
        <Link
          className="addNew h-fit w-fit px-6 py-2 bg-blue-600 rounded-md text-white"
          to="/studentForm"
        >
          Add New Data
        </Link>
      </div>
      <div className='flex items-center justify-center'>
      <img src={image} alt="no-data" className="h-1/2 w-1/2" />
    </div>
    </div>
    </>
  );
};

export default NoData;
