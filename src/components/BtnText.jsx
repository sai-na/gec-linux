import React from 'react'

function BtnText({ children }) {
    return (


        <span
            className="p-1.5 text-xs font-medium  tracking-wider   rounded-lg bg-opacity-50" style={{ backgroundColor: "#6E768166", color: "#C9D1D9" }}>{children}
        </span>

    )
}

export default BtnText