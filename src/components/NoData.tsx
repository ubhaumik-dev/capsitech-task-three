
import { Link } from 'react-router-dom';
const NoData = () => {
  return (
     <div className="NoData">
             <p>No Data Yet</p>
             <Link className="addNew h-fit w-fit px-6 py-2 bg-blue-600" to="/studentForm">
               Add New Data
             </Link>
    </div>
  )
}

export default NoData