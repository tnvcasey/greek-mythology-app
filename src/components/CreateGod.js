import React, { useState } from "react"

function CreateGod({ handleAddGod }){

    const [name, setName] = useState("")
    const [power, setPower] = useState("")

    
      function handleSubmit(e){
        e.preventDefault();
        const godData ={
          name: name, 
          power: power,
        }
        fetch("http://localhost:3004/gods", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          }, 
          body: JSON.stringify(godData), 
        })
          .then((res) => res.json())
          .then((newGod) => console.log(newGod))
    
          setFormData({
            name:"",
            power:""
          })
      }

    return (
        <div>
            <h1>Create A New God</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="God Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="power" placeholder="Power" value={power} onChange={(e) => setPower(e.target.value)} />
                    <button type="submit">Add God</button>
                </form>
        </div>
    )

}

export default CreateGod; 