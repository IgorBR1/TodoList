
const Search = ({search,setSearch}) => {
  return (
    <div className="justify-center flex items-center align-middle">
    <input className="block m-3  h-12 " type="text" value={search} onChange={(e) =>setSearch(e.target.value)} placeholder="Pesquise aqui..."/>

    </div>
  )
}

export default Search