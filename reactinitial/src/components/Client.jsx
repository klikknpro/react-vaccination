import React from 'react';
import http from "axios";
import {Button} from "@mui/material";

const Client = ({client}) => {
  const changeStatus = async(pet) => {
    const response = await http.post("https://demoapi.com/api/vet/pets/",
      {
        name: pet.name,
        isVaccinated: !(pet.isVaccinated)
      });
    console.log(response);
  };

  return (
    <div className="client-card">
      <h4>{client.name}</h4>
      <ul>{client.pets.map((pet, i) => (
        <li key={i}>
          <p>Pet's name: {pet.name}</p>
          <p>Breed: {pet.animal}</p>
          <p>{pet.isVaccinated ? "Vaccinated" : "Not vaccinated"}
            <Button onClick={() => changeStatus(pet)} color="info" variant="contained" size="small">Change status</Button>
          </p>
        </li>
      ))}</ul>
    </div>
  )
}

export default Client
