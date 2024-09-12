import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
    return (
        <div className='overflow-hidden'>
            <Skeleton className="w-full h-[358px]" />
            <Skeleton
                className='w-full mt-3 max-w-[230px] h-[12px] mx-auto' />
            <Skeleton className='max-w-[584px] h-[24px] my-8' />
            <div className='space-y-2'>
                <Skeleton className='max-w-[620px] h-[15px]' />
                <Skeleton className='max-w-[610px] h-[15px]' />
                <Skeleton className='max-w-[300px] h-[15px]' />
            </div>
            <Skeleton className='w-[584px] h-[24px] my-8' />
            <div className='space-y-2'>
                <Skeleton className='max-w-[620px] h-[15px]' />
                <Skeleton className='max-w-[610px] h-[15px]' />
                <Skeleton className='max-w-[300px] h-[15px]' />
            </div>
        </div>
    )
}

export default loading