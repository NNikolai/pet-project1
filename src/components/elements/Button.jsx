import React from 'react'

const Button = ({className, children, onChange}) => {
    return (
        <button 
            className={`btn ${className}`}
            onClick={onChange}
        >
            {children}
        </button>
    )
}

export default Button