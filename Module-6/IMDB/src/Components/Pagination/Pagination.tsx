import React from 'react'

const Pagination = ({pageNumber, nextPageFn, prevPageFn}) => {
    
  return (
    <div className='text-white flex justify-center h=[150px] bg-gray-400 w-full mt-8 items-center'>
        <div className='px-8 cursor-pointer' onClick={prevPageFn}>
            <i className='fa-solid fa-arrow-left'></i>
        </div>

        <div> {pageNumber}</div>
        <div className='px-8 cursor-pointer' onClick={nextPageFn}>
            <i className='fa-solid fa-arrow-right'></i>
        </div>
    </div>
  )
}

export default Pagination;
