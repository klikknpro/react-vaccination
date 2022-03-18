import {React, useState, useEffect} from 'react';
import {TextField, Button} from "@mui/material";
import http from "axios";

const Header = ({setClients, input, setInput}) => {
  // const [input, setInput] = useState("");

  const search = async() => {
    setClients("Searching...");
    const response = await http.get(`https://demoapi.com/api/vet/clients?search=${input}`);
    setClients(response.data);
  }

  return (
    <div className="header">
      <h1>Veterinarian admin - clients</h1>
      <TextField label="Search" variant="filled" color="info" size="small" value={input} onChange={(e) => setInput(e.target.value)}/>
      <Button disabled={input.length >= 3 ? false : true} color="info" variant="contained" size="small" onClick={search}>Search</Button>
    </div>
  )
}

export default Header
