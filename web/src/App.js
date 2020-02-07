import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
// Componente: bloco isilado de  HTML CSS JS
// Propriedades: Informaçoes que um componente PAI passsa para o componente Filho
// Estado: Informaçoes mantidas pelo componente { Lembrar de estudoar imutabilidade }


function App() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (err) => {
        console.log(err)
      }, {
      timeout: 30000
    }
    )

  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_usuario">Usuario GitHub</label>
            <input name="github_usuario" id="github_usuario" required />
          </div>

          <div className="input-block">
            <label htmlFor="tecno">Tecnologias </label>
            <input name="tecno" id="tecno" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/31358806?s=400&v=4" alt="João Guilherme"></img>
              <div className="user-info">
                <strong>João Guilherme</strong>
                <span>PHP, Laravel, Node.js</span>
              </div>
            </header>
            <p>Dev Back-end com foco em PHP.</p>
            <a href="https://github.com/gitjoao"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/31358806?s=400&v=4" alt="João Guilherme"></img>
              <div className="user-info">
                <strong>João Guilherme</strong>
                <span>PHP, Laravel, Node.js</span>
              </div>
            </header>
            <p>Dev Back-end com foco em PHP.</p>
            <a href="https://github.com/gitjoao"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/31358806?s=400&v=4" alt="João Guilherme"></img>
              <div className="user-info">
                <strong>João Guilherme</strong>
                <span>PHP, Laravel, Node.js</span>
              </div>
            </header>
            <p>Dev Back-end com foco em PHP.</p>
            <a href="https://github.com/gitjoao"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/31358806?s=400&v=4" alt="João Guilherme"></img>
              <div className="user-info">
                <strong>João Guilherme</strong>
                <span>PHP, Laravel, Node.js</span>
              </div>
            </header>
            <p>Dev Back-end com foco em PHP.</p>
            <a href="https://github.com/gitjoao"> Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
