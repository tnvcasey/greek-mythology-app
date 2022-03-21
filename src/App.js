import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import GodsPage from "./components/GodsPage"
import CreateGod from "./components/CreateGod"
import Home from "./components/Home"
import { Route, Switch } from "react-router-dom"

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

  function handleAddGod(newGod){
    const updatedGods= [...godsList, newGod]
    setGodsList(updatedGods)
  }


  return (
    <div className="app">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gods">
          <Header search={search} searchChange={searchChange} />
          <GodsPage deleteGod={deleteGod} godsList={godsList} filteredGods={filteredGods} />  
        </Route>
        <Route path="/gods/new">
          <CreateGod handleAddGod={handleAddGod} />
        </Route>
      </Switch>
    </div>
  )

}




export default App; 