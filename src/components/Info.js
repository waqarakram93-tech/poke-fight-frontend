import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Info() {
    const { id, info } = useParams()
    console.log(info)

    const [loading, setLoading] = useState(true)
    const [infopoke, setInfoPoke] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(`https://poe-fight.herokuapp.com/pokemons/${id}/${info}`)
            .then(response => response.json())
            .then(data => {

                setInfoPoke(data)
                setLoading(false)
            })
    }, [id, info])


    return !loading && infopoke ?
        <div>

            <p>{infopoke.english}</p>

            <p>{infopoke.map(item => (<li key={item}>{item}</li>))}</p>

            <p>{infopoke.HP}</p>
        </div> : 'Loading'

}


export default Info
