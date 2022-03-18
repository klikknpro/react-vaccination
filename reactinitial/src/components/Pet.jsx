import {React, useState} from 'react';
import http from "axios";
import {Button} from "@mui/material";

const Pet = ({pet, input, setClients}) => {
  const [isLoading, setIsLoading] = useState(false);

  const changeStatus = async(pet) => {
    setIsLoading(true);
    const response = await http.post("https://demoapi.com/api/vet/pets/",
      {
        name: pet.name,
        isVaccinated: !(pet.isVaccinated)
    });
    const updatedResponse = await http.get(`https://demoapi.com/api/vet/clients?search=${input}`);
    setClients([...updatedResponse.data]);
    setIsLoading(false);
  };

  return (
    <div>
      <li>
        <p>Pet's name: {pet.name}</p>
        <p>Breed: {pet.animal}</p>
        <p>{!isLoading ? pet.isVaccinated ? "Vaccinated" : "Not vaccinated" : "Updating status..."}
          <Button onClick={() => changeStatus(pet)} color="info" variant="contained" size="small">Change status</Button>
        </p>
      </li>
    </div>
  )
}

export default Pet
