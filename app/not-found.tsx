'use client'
import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import not_found from "@/assets/not-found.svg"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeftCircle } from 'lucide-react';


export default function NotFound() {
    const pathname = usePathname();

    return (
        <Card className='pb-10 pt-6 space-y-6 px-4'>
            <Link href="/" >
                <ArrowLeftCircle className='text-muted-foreground' />
            </Link>
            <div className='flex flex-col justify-center items-center w-full'>
                <Image src={not_found} height={300} width={300} alt='not found ' />
                <h1 className='font-extrabold text-transparent md:text-8xl text-2xl bg-clip-text bg-gradient-to-r from-primary to-pink-600'>Not found</h1>
                <p className='mt-4 text-foreground p-4 text-center'>Unfortunately, we could not find the requested page or resource.</p>
            </div>
        </Card>
    );
}
