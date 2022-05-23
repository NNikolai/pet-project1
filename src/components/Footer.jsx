import React from 'react'
import FooterLogo from '../assets/img/FooterLogo.svg'
import Button from './elements/Button'

const Footer = () => {
    return (
        <footer className='bg-darkgray py-20 md:py-10'>
            <div className='container flex justify-between gap-40 md:flex-col md:gap-10'>
                <div className='max-w-xs md:max-w-full '>
                    <a href="/"><img src={FooterLogo} alt="footer-logo" /></a>
                    <p className='mt-4 text-white text-xl'>
                        Sign up for our newsletter to get latest news from us
                    </p>
                    <input 
                        type="text" 
                        placeholder='Enter your email' 
                        className='mt-3 bg-lightdark flex w-full py-3 px-4 rounded-xl border-[1px] border-[#595959] text-white focus:outline-none focus:border-lightred placeholder:italic'
                        />
                    <Button className='text-white shadow-customred bg-lightred'>
                        Submit
                    </Button>
                </div>
                <div className='text-right md:text-left'>
                    <div className='text-lightred text-xl font-medium'>Jump to</div>
                    <ul className='mt-2'>
                        <li className='mt-3'><a href="/about" className='text-white text-xl font-medium'>About</a></li>
                        <li className='mt-3'><a href="/contacts" className='text-white text-xl font-medium'>Contacts</a></li>
                        <li className='mt-3'><a href="/services" className='text-white text-xl font-medium'>Services</a></li>
                        <li className='mt-3'><a href="/case-studies" className='text-white text-xl font-medium'>Case Studies</a></li>
                        <li className='mt-3'><a href="/blog" className='text-white text-xl font-medium'>Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer