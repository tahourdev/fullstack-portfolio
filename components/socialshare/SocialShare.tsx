'use client'
import React, { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, PinterestIcon, TelegramShareButton, TelegramIcon } from 'react-share';
import { Button, buttonVariants } from '../ui/button';
import { FaFacebook, FaLink, FaLinkedin, FaPinterest, FaTelegram } from 'react-icons/fa';
import { Link, XIcon } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { cn } from '@/lib/utils';


const SocialShare = () => {
    const [fullUrl, setFullUrl] = useState<string>("")

    useEffect(() => {
        const url = window.location.href
        setFullUrl(url)
    }, [])

    const copyUrl = () => {
        if (!fullUrl) return
        navigator.clipboard.writeText(fullUrl)
    }

    const shareText = "Hello world"
    const hashtag = "#YourHashtag"

    return (
        <div className='flex gap-2 items-center mt-6 flex-wrap'>
            <h2 className='text-2xl font-semibold'>Share:</h2>
            {/* <Button onClick={copyUrl} variant="secondary" size='icon'>
                <FaLink />
            </Button> */}
            <TwitterShareButton url={fullUrl}>
                <span className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}>
                    <FaXTwitter />
                </span>
            </TwitterShareButton>
            <FacebookShareButton url={fullUrl} hashtag={hashtag}>
                <span className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}>
                    <FaFacebook />
                </span>
            </FacebookShareButton>
            <LinkedinShareButton url={fullUrl}>
                <span className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}>
                    <FaLinkedin />
                </span>
            </LinkedinShareButton>
            <PinterestShareButton url={fullUrl} media={fullUrl}>
                <span className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}>
                    <FaPinterest />
                </span>
            </PinterestShareButton>
            <TelegramShareButton url={fullUrl}>
                <span className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}>
                    <FaTelegram />
                </span>
            </TelegramShareButton>
        </div>
    )
}

export default SocialShare
