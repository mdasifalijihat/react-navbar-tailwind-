import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 px-6 '>
            <a href={route.path}> {route.name} </a>
        </li>
    );
};

export default Link;