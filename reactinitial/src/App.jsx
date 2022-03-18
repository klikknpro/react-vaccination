import {React, useState } from "react";
import Header from "./components/Header";
import Client from "./components/Client";

const App = () => {
  const [input, setInput] = useState("");
  const [clients, setClients] = useState("");

  return (
    <div>
      <Header setClients={setClients} input={input} setInput={setInput}/>
      {!clients ? "No client information available." :
        clients === "Searching..." ? "Searching..." :
        clients.map((client, i) => (
          <Client client={client} setClients={setClients} input={input} key="i"/>
        ))
      }
    </div>
  );
};

export default App;
