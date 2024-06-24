import React, { useState } from 'react'

export default function Searchbar(props) {
    const [searchbarInput, setSearchbarInput] = useState("");
    const inputChange = (e)=>{
        setSearchbarInput(e.target.value);
    }

    const inputSubmited = (e)=>{
        e.preventDefault();
        props.bringList();
    }

  return (
    <div>
        <form onSubmit={inputSubmited}>
            <input 
            type='text' 
            onChange={inputChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search text..."
            ></input>
            <button 
            type="submit"
            className="mt-20 ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >Search
            </button>
        </form>
    </div>
  )
}
