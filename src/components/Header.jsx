import React from 'react'
import MenuButton from './elements/MenuButton';
import Logo from './elements/Logo';

const Header = () => {
    return (
        <header className="container relative">
            <nav className="flex justify-between items-center pt-[26px]">
                <a href="/">
                    <Logo/>
                </a>
                <ul className="flex gap-12 md:hidden">
                    <li><a href="/about" className="dark:text-white font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base">About</a></li>
                    <li><a href="/services" className="dark:text-white font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base">Services</a></li>
                    <li><a href="/case-studies" className="dark:text-white font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base">Case Studies</a></li>
                    <li><a href="/careers" className="dark:text-white font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base">Careers</a></li>
                    <li><a href="/blog" className="dark:text-white font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base">Blog</a></li>
                </ul>
                <MenuButton />
            </nav>
        </header>
    )
}

export default Header