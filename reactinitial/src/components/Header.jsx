import React from 'react';
import {TextField} from "@mui/material";

const Header = () => {
  return (
    <div>
      <h1>Veterinarian admin - clients</h1>
      <TextField label="Search" variant="filled" color="info" size="small"/>
    </div>
  )
}

export default Header
