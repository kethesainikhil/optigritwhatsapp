import React, { useState } from 'react'

const SearchBar = () => {
    const handleChange = (e) =>{
        e.target.placeholder = ""
        console.log(e.target)
    }
  return (
    <div className='flex ml-2 my-3'>
        <input type="text"  placeholder="Search or start new chat" className='h-10 w-80 px-2 bg-slate-700' onClick={(e)=>handleChange(e)} />


        
        <span className='ml-1' data-icon="filter" class="ml-1"><svg viewBox="0 0 24 24" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>filter</title><path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg></span>
    </div>
  )
}

export default SearchBar