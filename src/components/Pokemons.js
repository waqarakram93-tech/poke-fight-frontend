import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


function Pokemons() {

    const [loading, setLoading] = useState(true)
    const [pokes, setPokes] = useState([])


    useEffect(() => {
        setLoading(true)
        fetch(`https://poe-fight.herokuapp.com/pokemons`)
            .then(response => response.json())
            .then(data => {

                setPokes(data)
                setLoading(false)
            })


    }, [])
    if (loading) return <>Loading</>


    return (
        <>

            {
                pokes.map((poke) =>
                    <li key={poke.id}>
                        <p><Link to={`/pokemons/${poke.id}`}>{poke.id}</Link></p>

                        <p> {poke.name.english}</p>
                        <p>{poke.type.join(', ')}</p>
                        <p> {poke.base.Attack}</p>


                    </li>

                )}

        </>

    )

}


export default Pokemons

