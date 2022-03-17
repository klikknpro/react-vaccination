import React from 'react'

const Client = ({client}) => {
  console.log("from comp ", client);

  return (
    <div>
      <h4>{client.name}</h4>
      <ul>{client.pets.map((pet, i) => (
        <li>
          <p>Pet's name: {pet.name}</p>
          <p>Breed: {pet.animal}</p>
          <p>{pet.isVaccinated ? "Vaccinated" : "Not vaccinated"}</p>
        </li>
      ))}</ul>
    </div>
  )
}

export default Client
