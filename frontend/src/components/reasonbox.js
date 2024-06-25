import React from 'react';

export default function Reasonbox({ value, onChange }) {
    return (
        <div className="w-full px-4">
            <textarea
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                placeholder="Enter the reason..."
                rows="6"
            />
        </div>
    );
}
