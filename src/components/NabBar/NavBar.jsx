import React from 'react';
import Link from './Link';

const NavBar = () => {
    const navigationData = [
        { id: 1, name: "Home", pathUrl: "/home" },
        { id: 2, name: "About", pathUrl: "/about" },
        { id: 3, name: "Products", pathUrl: "/products" },
        { id: 4, name: "Contact", pathUrl: "/contact" },
        { id: 5, name: "Blog", pathUrl: "/blog" }
      ];
    return (
        <nav>
           <ul className='flex'>
           {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
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
            
        </nav>
    );
};

export default NavBar;