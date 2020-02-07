import React, { useState, useEffect } from "react";
import api from "./services/api"

import DevItem from "./components/DevItem"
import DevForm from "./components/DevForm"

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

// Componente: bloco isilado de  HTML CSS JS
// Propriedades: Informaçoes que um componente PAI passsa para o componente Filho
// Estado: Informaçoes mantidas pelo componente { Lembrar de estudoar imutabilidade }


function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function sendDev(data) {

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={sendDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
