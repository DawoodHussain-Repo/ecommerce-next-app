'use client'
import React from 'react'
import Image from 'next/image'
import loupe from '../../public/loupe.png'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    
const router = useRouter();

const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const formData = new FormData(e.currentTarget);
const searchQuery = formData.get('searchQuery') as string;
if(searchQuery)
    {
        router.push(`/search?q=${searchQuery}`);
    }
};
    return (
    <form className="flex items-center justify-between  gap-4 p-2 w-full flex-1" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        name='searchQuery'
        className="flex-1 py-2 px-3 border rounded-lg focus:outline-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-2 bg-gray-200 rounded-lg"
      >
        <Image src={loupe} alt="Search" width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
