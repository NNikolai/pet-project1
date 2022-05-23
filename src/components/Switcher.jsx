import React, { useState } from 'react'
import useDarkSide from './../hooks/useDarkSide';
import Button from './elements/Button';

export default function Switcher() {
    const[colorTheme, setTheme] = useDarkSide()
    const[darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return (
        <>
            <Button 
                className='text-white shadow-customred bg-lightred fixed right-2 bottom-2'
                checked={darkSide}
                onChange={toggleDarkMode}
            >
                Mode
            </Button>
        </>
    )
}
