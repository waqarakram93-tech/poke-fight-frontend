import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function SinglePoke() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [singlepoke, setSinglePoke] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(`https://poe-fight.herokuapp.com/pokemons/${id}`)
            .then(response => response.json())
            .then(data => {

                setSinglePoke(data)
                setLoading(false)
            })
    }, [id])


    return !loading && singlepoke ?
        <div>
            {/* <p><Link to={`/pokemons/${singlepoke.name.english}/`}>{singlepoke.name.english}</Link></p> */}
            <p>{singlepoke.name.english}</p>
            <p>{singlepoke.type.join(', ')}</p>
            <p>{singlepoke.base.HP}</p>
            <Link to="/pokemons">Back</Link>
        </div> : 'Loading'


}


export default SinglePoke
