import React, { useState } from "react"

function CreateGod({ handleAddGod }){

    const [formData, setFormData] = useState({
        name: "",
        power: "",
        romanname: "", 
        image: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

      }
      
    
      function handleSubmit(e){
        e.preventDefault();
        const updatedFormData = {...formData}
        fetch("http://localhost:3004/gods", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          }, 
          body: JSON.stringify(updatedFormData), 
        })
          .then(res => res.json())
          .then(data => console.log(data))
    
          setFormData({
            name:"",
            power:"",
            romanname:"",
            image:""
          })
      }




    return (
        <div>
            <h1>Create A New God</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="God Name" value={formData.name} onChange={handleChange} />
                    <input type="text" name="power" placeholder="Power" value={formData.power} onChange={handleChange} />
                    <input type="text" name="romanname" placeholder="Roman Name" value={formData.romanname} onChange={handleChange} />
                    <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                    <button type="submit">Add God</button>
                </form>
        </div>
    )

}

export default CreateGod; 