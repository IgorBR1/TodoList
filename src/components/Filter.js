import React from 'react'

const Filter = () => {
  return (
    <div className='filter justify-center flex items-center align-middle'>
        <div className='filter-options'>
           <p>Status:</p>
            <select className=''>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabetica</p>
            <div className='p-5'>
            <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 p-5'>Asc</button>
            <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 ml-4'>Desc</button>

            </div>
        </div>
    </div>
  )
}

export default Filter