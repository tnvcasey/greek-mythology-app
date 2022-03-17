import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import GodsPage from "./components/GodsPage"

function App(){
  
  const [godsList, setGodsList] = useState([])
  const [search, setSearch] = useState("")

  function searchChange(newSearch){
      setSearch(newSearch)
  }

  const filteredGods = godsList.filter((god) => god.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:3004/gods")
      .then(res => res.json())
      .then(godsList => setGodsList(godsList))
  }, [])




  return (
    <div className="app">
      <Header search={search} searchChange={searchChange} />
      <GodsPage godsList={godsList} filteredGods={filteredGods} />

    </div>
  )

}




export default App; 