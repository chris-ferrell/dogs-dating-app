import { useState } from "react";
import Dog from "./Dog";

function Dogs() {
    const [dogs, setDogs] = useState([{
        name: "Luke",
        age: 7,
        breed: "Blue Nose",
        favoriteToy: "Anything he can get his paws on",
        size: "Large",
        gender: "Male"
    }]);
    const [dogForm, setDogForm] = useState(
        {
            name: "",
            age: 1,
            breed: "",
            favoriteToy: "",
            size: "",
            gender: ""
        }
    )

    const handleChange = (e) => {
        console.log(e.target)
        setDogForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name] : e.target.value

        }))
        console.log(dogForm)
    }

    const handleSubmit = (e) => {
        e.preventdefault
        setDogs((startingDogs) => ([...startingDogs,
        dogForm]))
    }

    return (
        <>
            <h2>Here are my dogs</h2>
            {dogs.map((dog, idx) => {
                return(
                    <div key={idx}>
                        <Dog dog={dog} />
                    </div>
                )
            })}
            <form onSubmit={(handleSumbit)}>
                <label>
                    <span>Name: </span>
                    <input
                        type="text"
                        placeholder="Dog's name"
                        name="name"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Age: </span>
                    <input
                        type="number"
                        placeholder="Age of dog"
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Breed: </span>
                    <input
                        type="text"
                        placeholder="Havanese"
                        name="breed"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Favorite Toy: </span>
                    <input
                        type="text"
                        placeholder="something chewy"
                        name="favoriteToy"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Size:</span>
                    <select name="size" onChange={handleChange}>
                        <option value="Tiny">Tiny</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Gigantic">Gigantic</option>
                    </select>
                </label>
                <label>
                    <span>Gender</span>
                    <select name="gender" onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <button>Submit Form</button>
            </form>
        </>
    )
}

export default Dogs;