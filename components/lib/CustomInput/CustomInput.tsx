import { FaSearch } from 'react-icons/fa';
import { ICustomSearchInput } from './customInput.model';

const CustomSearchInput = (props: ICustomSearchInput) => {

  return (
    <>
      <div className='flex flex-row'>
          <button 
            className="h-10 bg-gray-300 rounded-l p-2 text-white pl-4"
            onClick={props.onClick}
            disabled={props.isDisable}
          >
              <FaSearch/>
          </button>
          <input
            className='w-80 h-10 bg-gray-300 rounded-r p-2 focus:outline-none'
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
      </div>
    </>
  )
}

export default CustomSearchInput;