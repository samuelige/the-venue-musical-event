import React, { useState } from 'react'
import Logo from '../Logo'
import logoSvg from '../../assets/logo.svg'
import menuItems from './header.data'
import { Link } from 'react-scroll'
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const Header = ({className}) => {
    const [menu, setMenu] = useState(false);
    return (
        <header className={className}>
            <div className='hidden lg:container lg:w-full lg:flex lg:flex-row lg:items-center lg:px-14 lg:py-6'>
                
                <div className='cursor-pointer'>
                    <Logo src={logoSvg}/>
                </div>

                <nav className='space-x-4 m-auto'>
                    {
                        menuItems && menuItems.map(({path, label}, i) => (
                            <Link key={i}
                                activeClass="active"
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </nav>
            </div>

            <div className=" p-3 items-center w-full container md:px-10 md:py-12  lg:hidden">
                <div className='float-left cursor-pointer'>
                    <Logo src={logoSvg}/>
                </div>

                <div className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-10 md:mt-24" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                    <nav className='flex flex-col space-y-2 mb-4 '>
                        {
                            menuItems && menuItems.map(({path, label}, i) => (
                                <Link key={i}
                                    activeClass="active"
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {label}
                                </Link>
                            ))
                        }
                    </nav>
                </div>

                <div className="float-right  xl:hidden">
                    {!menu ? (
                        <HiDotsHorizontal className="h-5" id="open" onClick={() => setMenu(true)} />
                    ) : (
                        <HiOutlineX className="h-5" id="close" onClick={() => setMenu(false)}/>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
