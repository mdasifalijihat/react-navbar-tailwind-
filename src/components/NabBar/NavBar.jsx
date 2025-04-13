import React, { useState } from 'react';
import Link from './Link';
import { IoIosCloseCircleOutline, IoMdMenu } from 'react-icons/io';



const NavBar = () => {

    const [open, setOpen] = useState(false);

    const navigationData = [
        { id: 1, name: "Home", pathUrl: "/home" },
        { id: 2, name: "About", pathUrl: "/about" },
        { id: 3, name: "Products", pathUrl: "/products" },
        { id: 4, name: "Contact", pathUrl: "/contact" },
        { id: 5, name: "Blog", pathUrl: "/blog" }
      ];

        const links = navigationData.map(route => <Link key={route.id} route={route}></Link>); 
      

    return (
        <nav className='flex justify-between container mx-auto text-black'>

           <span className='flex gap-4' onClick={() =>setOpen(!open)}>
            {open ? <p className='md:hidden'><IoIosCloseCircleOutline size={25} /></p> : <p className='md:hidden'> <IoMdMenu size={25} /> </p>   }
            <ul className={`md:hidden absolute duration-1000
                 ${open?'top-8' : '-top-40' }
                  bg-amber-200`}>
            {
                links
            }
                </ul>            
           <h2> My Navbar </h2>
           </span>

           <ul className='md:flex hidden'>
           {
                links
            }
           </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10 flex'> <a href={route.pathUrl}> {route.name} </a> </li>)
                }
            </ul> */}
            {/* <ul className='flex gap-6'>
                <li><a href="/"> Home </a></li>
                <li><a href="/"> About </a></li>
                <li><a href="/"> Blog </a></li>
            </ul> */}

            <button> Sign In </button>
            
        </nav>
    );
};

export default NavBar;