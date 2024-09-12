import React from 'react'
import { Card } from '../ui/Card';

const HomeWrapper = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex w-full basis-[60%] flex-col gap-6 relative">
            <Card className='main-card backdrop-blur-sm'>
                {children}
            </Card>

        </div>
    )
}

export default HomeWrapper