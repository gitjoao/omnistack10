import React from 'react'

import './style.css'
function DevItem({dev}) {

    return (

        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.tecno.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.user_github}`}> Acessar perfil no Github</a>
        </li>
    )
}
export default DevItem