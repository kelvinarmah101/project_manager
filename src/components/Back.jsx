import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


const Back = () => {
  return (
    <Link to={-1}>
        <div className='h-[40px] w-[40px] rounded-full border flex items-center justify-center bg-white'>
            <ChevronLeft />
        </div>
    </Link>
  )
}

export default Back