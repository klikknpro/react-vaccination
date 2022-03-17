import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Client from "./components/Client";

const App = () => {
  const [clients, setClients] = useState("");
  // console.log("from app ", clients);

  return (
    <div>
      <Header setClients={setClients}/>
      {!clients ? "No client information available." :
        clients === "Searching..." ? "Searching..." :
        clients.map((client, i) => (
          <Client client={client} key="i"/>
        ))
      }
    </div>
  );
};

export default App;
