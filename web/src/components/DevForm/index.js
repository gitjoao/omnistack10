import React, { useState, useEffect } from 'react'
import './style.css'

function DevForm({ onSubmit }) {

    const [user_github, setUserGit] = useState('')
    const [tecno, setTecno] = useState('')
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

    async function sendSubmit(e) {
        e.preventDefault();
        await onSubmit({
            user_github,
            tecno,
            latitude,
            longitude
        })

        setUserGit('')
        setTecno('')
    }

    return (


        <form onSubmit={sendSubmit}>
            <div className="input-block">
                <label htmlFor="user_github">Usuario GitHub</label>
                <input
                    name="user_github"
                    id="user_github"
                    required
                    value={user_github}
                    onChange={e => setUserGit(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="tecno">Tecnologias </label>
                <input
                    name="tecno"
                    id="tecno"
                    required
                    value={tecno}
                    onChange={e => setTecno(e.target.value)}
                />
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
    )
}

export default DevForm