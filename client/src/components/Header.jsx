import { Navbar, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
// import { TextInput } from 'flowbite-react'
export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Navbar.Brand>
        <Link to="/" className='self-center whitespace-nowrap text-small sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-600  via-purple-500 to-indigo-950 rounded-lg text-white'>
                Hit</span>
                Hits
        </Link> 
        </Navbar.Brand>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
                />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
                Sign-in
            </Button>
            </Link>
            <Navbar.Toggle />
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'}>
                    <Link to='/'>
                    Home
                    </Link>
                </Navbar.Link>
            
                <Navbar.Link active={path === '/about'}>
                    <Link to='/about'>
                    About
                    </Link>
                </Navbar.Link>
           
                <Navbar.Link active={path === '/projects'}>
                    <Link to='/projects'>
                    Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
