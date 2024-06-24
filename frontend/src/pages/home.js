import React, { useState } from 'react'
import Searchbar from '../components/searchbar'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import axios from 'axios';

export default function Home() {
  const [filteredPkg, setFilteredPkg] = useState([]);

  const bringList = async (e)=>{
    try {
      const res = await axios.get(`https://api.npms.io/v2/search?q=${e}`);
      if(res.status === 200){
        const data = await res.data;
        const filtered = data.results.map((x) => {
          return x.package.name.toLowerCase();
        });
        console.log(data);
        setFilteredPkg(filtered);
      }
      else{
        throw new error("Unable to fetch packages");

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Searchbar
        submitFunc={bringList}
      />
      <div className="overflow-y-auto max-h-80">
        {
          filteredPkg.map( (item)=> (
            <div className='flex justify-left pl-72 p-2 ml-5'>
              <input
                type='radio'
                id={item}
                name="packageName"
                value={item}
              />
            <lable>{item}</lable>
            </div>
          ))
        }
      </div>
    </div>
  )
}
