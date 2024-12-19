import "./App.css"
import { useState } from "react"


function App() {
  const [person, setPerson] = useState({
    name: "",
    lastname: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setPerson((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted person:", person);
  }

	return (
		<>
			<h1 className="text-3xl font-bold underline">hello world</h1>

      <div>
        <p>Name: {person.name}</p>
        <p>Lastname: {person.lastname}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={person.name} onChange={handleInputChange} />
        <input type="text" name="lastname" value={person.lastname} onChange={handleInputChange} />
        <button>submit</button>
      </form>
		</>
	)
}

export default App
