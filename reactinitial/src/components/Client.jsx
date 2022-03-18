import React from 'react';
import Pet from './Pet';

const Client = ({client, setClients, input}) => {
  return (
    <div className="client-card">
      <h4>{client.name}</h4>
      <ul>{client.pets.map((pet, i) => (
        <Pet pet={pet} key={i} input={input} setClients={setClients}/>
      ))}</ul>
    </div>
  )
}

export default Client
