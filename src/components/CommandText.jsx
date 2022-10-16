import React from 'react'

function CommandText({ children }) {
    return (
        <span style={{ color: "#8B949E" }}>{"//" + children}</span>
    )
}

export default CommandText