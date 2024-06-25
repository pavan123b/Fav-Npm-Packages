import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Searchbar from '../components/searchbar';
import Reasonbox from '../components/reasonbox';

export default function Home({ setFavarr, favarr }) {
  const [searchbarInput, setSearchbarInput] = useState("");
  const [filteredPkg, setFilteredPkg] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const inputChange = (e) => {
    setSearchbarInput(e.target.value);
  };

  useEffect(() => {
    if (searchbarInput !== "") {
      bringList();
    } else {
      setFilteredPkg([]);
    }
  }, [searchbarInput]);

  const bringList = async () => {
    try {
      const res = await axios.get(`https://api.npms.io/v2/search?q=${searchbarInput}&size=100`);
      if (res.status === 200) {
        const data = await res.data;
        const filtered = data.results.map((x) => {
          return x.package.name.toLowerCase();
        });
        setFilteredPkg(filtered);
      } else {
        console.log(`Error Message : Unable to fetch packages`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const radioClicked = (e) => {
    setSelectedPackage(e.target.value);
  };

  const addfav = () => {
    if (!selectedPackage) {
      alert("Please select a package.");
      return;
    }
    if (!reason) {
      alert("Please enter a reason.");
      return;
    }
    if (favarr.some(pkg => pkg.name === selectedPackage)) {
      alert("This package is already in your favorites.");
      return;
    }
    setFavarr([...favarr, { name: selectedPackage, reason: reason }]);
    setSelectedPackage("");
    setReason("");
    navigate('/favlist');
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='w-full max-w-screen-md'>
        <div className='mb-8'>
          <div className='text-2xl font-semibold mb-4 text-center'>Search for NPM Packages</div>
          <Searchbar
            inputChange={inputChange}
            value={searchbarInput}
          />
        </div>

        <div className='mb-8'>
          <div className='text-2xl font-semibold mb-4 text-center'>Results</div>
          <div className="mx-10 overflow-y-auto max-h-80 border p-4 rounded-lg bg-gray-100">
            {filteredPkg.length > 0 ? (
              filteredPkg.map((item, index) => (
                <div key={index} className='m-3'>
                  <input
                    type='radio'
                    id={item}
                    name="packageName"
                    value={item}
                    onClick={radioClicked}
                  />
                  <label htmlFor={item} className='ml-2'>{item}</label>
                </div>
              ))
            ) : (
              <div className="text-center">No NPM Packages found</div>
            )}
          </div>
        </div>

        <div className='mb-8'>
          <div className='text-2xl font-semibold mb-4 text-center'>Reason</div>
          <Reasonbox
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className='flex justify-center'>
          <button
            onClick={addfav}
            className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
