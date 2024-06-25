import React from 'react';

export default function Searchbar(props) {
    return (
        <div>
            <form className="flex items-center justify-center">
                <input
                    type='text'
                    value={props.value}
                    onChange={props.inputChange}
                    className="w-full max-w-lg px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search NPM packages..."
                />
            </form>
        </div>
    );
}
