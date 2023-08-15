 import Link from 'next/link';
import React from 'react';


 function Menu() {
    return (
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link href='/' className='nav-link'>
                            {/* <a className='nav-link'>Home</a> */}
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/Speakers' className='nav-link'>
                            {/* <a className='nav-link'>Speakers</a> */}
                            Speakers
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
 };


 export default  Menu;