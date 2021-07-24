import { HomeIcon,SearchCircleIcon,StarIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'

// import React from 'react'
function Navbar(){
    return(
        <nav className="flex fixed bottom-0 bg-rm-blue container mx-auto px-6 py-2 rounded-t-2xl justify-around">

            <Link to='/search' className='flex-1 py-auto' ><SearchCircleIcon className='mx-auto w-12 text-rm-yellow' /></Link>
            <Link className='flex-1'  to='/'><HomeIcon className="mx-auto w-12 text-rm-yellow"/></Link>
            <Link className='flex-1' to='/favourite'><StarIcon className='mx-auto w-12 text-rm-yellow' /></Link>
        </nav>
    )
}

export default Navbar