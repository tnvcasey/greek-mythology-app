import React, { useEffect, useState } from "react"
import Home from "./components/Home"
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

  function deleteGod(name){
      fetch("http://localhost:3004/gods/${name}", {
          method: "DELETE"
      })
      const updatedGods = godsList.filter((god) => god.name !== name)
      setGodsList(updatedGods)

  }






  return (
    <div className="app">
      <Home search={search} searchChange={searchChange} />
      <GodsPage deleteGod={deleteGod} godsList={godsList} filteredGods={filteredGods} />

    </div>
  )

}




export default App; 