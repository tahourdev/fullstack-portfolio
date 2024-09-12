import React from 'react'
import { Input } from '../ui/input'
import { IoAddOutline } from 'react-icons/io5'

const SearchForm = () => {
    return (
        <>
            <Input className='h-10 bg-background placeholder:text-muted-foreground focus:ring-ring focus:ring-1' placeholder='Search...' />

        </>
    )
}

export default SearchForm