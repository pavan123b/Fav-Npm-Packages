import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center bg-violet-500 p-4'>
            <div className='text-white text-2xl font-bold'>
                Fav NPM Packages
            </div>
            <div className='flex space-x-4'>
                <Link className='text-white text-lg hover:underline' to="/">Home</Link>
                <Link className='text-white text-lg hover:underline' to="/favlist">Favourites</Link>
            </div>
        </div>
    )
}