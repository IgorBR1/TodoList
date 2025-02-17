import "../App.css"
const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className='filter justify-center flex items-center align-middle'>
        <div className='filter-options'>
           <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
        <div className="todo-form ml-10">
            <p className="text-2xl ">Ordem Alfabetica</p>
            <div className='p-5'>
            <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 p-5' onClick={() => setSort("Asc")}>Asc</button>
            <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 ml-4' onClick={() => setSort("Dsc")}>Desc</button>

            </div>
        </div>
    </div>
  )
}

export default Filter