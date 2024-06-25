import React from 'react';

export default function Searchbar(props) {
    return (
        <div className="w-full px-4">
            <form className="flex items-center justify-center w-full">
                <input
                    type='text'
                    value={props.value}
                    onChange={props.inputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Search NPM packages..."
                />
            </form>
        </div>
    );
}
