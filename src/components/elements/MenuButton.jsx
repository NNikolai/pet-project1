import React, { useState } from 'react'

const MenuButton = () => {

    const[show, setShow] = useState(false)

    return (
        <>  
            {/* Side Bar */}
            <div className={`hidden md:${show ? 'block': 'hidden'}`}>
                <ul className={`flex absolute left-6 right-6 top-24 flex-col items-center bg-lightred`}>
                    <li><a href="" className="block py-4 text-white">About</a></li>
                    <li><a href="" className="block py-4 text-white">Services</a></li>
                    <li><a href="" className="block py-4 text-white">Case Studies</a></li>
                    <li><a href="" className="block py-4 text-white">Careers</a></li>
                    <li><a href="" className="block py-4 text-white">Blog</a></li>
                </ul>
            </div>
            {/* Menu button */}
            <button 
                className={`burger ${show ? 'active' : ''} hidden md:block`}
                onClick={()=>setShow(!show)}
            >
                <span className="burger-line top-line"/>
                <span className="burger-line mid-line"/>
                <span className="burger-line bottom-line"/>
            </button>
        </>
    )
}

export default MenuButton