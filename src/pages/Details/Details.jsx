import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <main>
            <div>{location.state.name.common}</div>
            <button onClick={() => { navigate(-1) }}>back</button>
            <Link style={{ display: "block", margin: "1rem 0", color: "black" }} to="/">
                Home
            </Link>
        </main>
    )
}

export default Details