import React from 'react'
import './Header.css'

export const Header = ({length}) => {
    return (
        <div className="heading-div row">
            <div className="col-md-10">
            <h1 className="heading">My Shopping Cart</h1>
        </div>
        <div className="col-md-2">
            <button className="btn btn-primary">
                cart<span className="badge">{length}</span>
            </button>

        </div>
        </div>
    )
}
