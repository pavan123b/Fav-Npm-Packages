import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiPencilAlt, HiTrash } from 'react-icons/hi';

export default function Favlist({ setFavarr, favarr }) {
    const [viewreason, setViewReason] = useState("");
    const [editreason, setEditReason] = useState("");
    const [editing, setEditing] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const navigate = useNavigate();

    const handleView = (reason) => {
        setViewReason(viewreason === reason ? "" : reason);
        setEditing(null);
    };

    const handleEdit = (index) => {
        setEditReason(favarr[index].reason);
        setViewReason("");
        setEditing(index);
    };

    const handleSaveEdit = (index) => {
        const temparr = [...favarr];
        temparr[index].reason = editreason;
        setFavarr(temparr);
        setEditing(null);
        setViewReason("");
    };

    const handleDelete = (index) => {
        const temparr = favarr.filter((_, i) => i !== index);
        setFavarr(temparr);
        setEditing(null);
        setViewReason("");
        setConfirmDelete(null);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <div className="text-3xl">Welcome to Fav NPM Packages</div>
                <button
                    onClick={() => navigate('/')}
                    className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
                >
                    Add Fav
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {favarr.length ? (
                    <table className="w-full">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="py-2 px-4 text-left">Package Name</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favarr.map((pkg, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-2 px-4">{pkg.name}</td>
                                    <td className="py-2 px-4 flex items-center space-x-2">
                                        <button onClick={() => handleView(pkg.reason)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                            <HiEye className="h-5 w-5" />
                                        </button>
                                        <button onClick={() => handleEdit(index)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                            <HiPencilAlt className="h-5 w-5" />
                                        </button>
                                        <button onClick={() => setConfirmDelete(index)} className="text-red-600 hover:text-red-900 focus:outline-none">
                                            <HiTrash className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-4 text-center">No favorite packages added</div>
                )}
            </div>
            {viewreason && !editing && (
                <div className="mt-4 bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-2">Reason:</h3>
                    <p className='pr-4 overflow-y-auto max-h-20'>{viewreason}</p>
                </div>
            )}
            {editing !== null && (
                <div className="mt-4 bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-2">Edit Reason:</h3>
                    <textarea
                        value={editreason}
                        onChange={(e) => setEditReason(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    />
                    <button onClick={() => handleSaveEdit(editing)} className="mt-2 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50">
                        Save
                    </button>
                </div>
            )}
            {confirmDelete !== null && (
                <div className="mt-4 bg-white rounded-lg shadow-md p-4">
                    <p className="text-black font-bold">Are you sure you want to delete this package?</p>
                    <div className="flex justify-end mt-2">
                        <button onClick={() => setConfirmDelete(null)} className="bg-gray-200 text-gray-800 font-bold py-1 px-4 rounded mr-2 focus:outline-none">
                            Cancel
                        </button>
                        <button onClick={() => handleDelete(confirmDelete)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
