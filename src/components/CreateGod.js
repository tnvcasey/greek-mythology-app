import React, { useState } from "react"

function CreateGod({ handleAddGod }){

    const [image, setImage] = useState({
      value:"",
      charactersLeft: 10
    })
    const [name, setName] = useState("")
    const [romanname, setRomanname] = useState("")
    const [power, setPower] = useState("")
    const [charactersLeft, setCharactersLeft] = useState(10)

    function handleCharacters(e){
      setCharactersLeft(10 - e.target.value.length)
    }
    
      function handleSubmit(e){
        e.preventDefault();
        const godData ={
          image: image,
          name: name, 
          romanname: romanname,
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
          .then((newGod) => {
            handleAddGod(newGod)
            
            setImage("")
            setName("")
            setRomanname("")
            setPower("")
          })
    
          
          
      }

      function handleChange(e){
        if (e.target.value.length <= 10){
        setImage({
          ...image, //This is how you keep other keys (formData)
          value: e.target.value,
          charactersLeft: 10 - e.target.value.length
        }
          )
        
        }
      }

    return (
        <div>
            <h1>Create A New God!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="image" placeholder="Image URL" value={image.value} onChange={handleChange} />
                    <div>You have {image.charactersLeft} characters left</div>
                    <input type="text" name="name" placeholder="God Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="romanname" placeholder="Roman Name" value={romanname} onChange={(e) => setRomanname(e.target.value)} />
                    <input type="text" name="power" placeholder="Power" value={power} onChange={(e) => setPower(e.target.value)} />
                    <button type="submit">Add God</button>
                </form>
        </div>
    )

}

export default CreateGod; 