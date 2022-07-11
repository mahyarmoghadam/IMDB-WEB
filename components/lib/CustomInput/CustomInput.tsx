import { FaSearch } from 'react-icons/fa';

const CustomSearchInput = () => {
  return (
    <>
      <div className='flex flex-row'>
          <button className="h-10 bg-gray-300 rounded-l p-2 text-white pl-4">
              <FaSearch/>
          </button>
          <input
            className='w-80 h-10 bg-gray-300 rounded-r p-2 focus:outline-none'
            placeholder='What Are You Looking For?'
          />
      </div>
    </>
  )
}

export default CustomSearchInput;