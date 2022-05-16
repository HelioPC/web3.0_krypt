import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'

import logo from '../../assets/images/logo.png'

const NavbarItem = ({ title, classProp }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProp}`}>
            <a href="#">{title}</a>
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div
                className="
                    md:flex-[0.5] flex-initial justify-center items-center
                "
            >
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul
                className="
                    text-white md:flex hidden list-none flex-row
                    justify-space-between items-center
                    flex-initial
                "
            >
                {['Markets', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                    <NavbarItem title={item} key={item + index} />
                ))}

                <li
                    className="
                        bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer
                        hover:bg-[#2546bd]
                    "
                >
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ?
                    <AiOutlineClose
                        size={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                    :
                    <HiMenu
                        size={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                }
                {toggleMenu && (
                    <ul
                        className="
                            z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen
                            shadow-2xl md:hidden list-none flex flex-col
                            justify-start items-end rounded-md
                            blue-glassmorphism text-white animate-slide-in
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose
                                className='cursor-pointer'
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>
                        {['Markets', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                            <NavbarItem
                                title={item}
                                key={item + index}
                                classProp="my-2 text-lg"
                            />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
