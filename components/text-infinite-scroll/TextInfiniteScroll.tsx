import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Link from 'next/link';

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "As a frontend developer specializing in React.js and Next.js, I create seamless, dynamic web experiences by integrating various technologies. Enjoy browsing through my projects without interruptions.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "As a frontend developer specializing in React.js and Next.js, I create seamless, dynamic web experiences by integrating various technologies. Enjoy browsing through my projects without interruptions.",
        img: "https://avatar.vercel.sh/jill",
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
        // className={cn(
        //     "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        //     // light styles
        //     "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        //     // dark styles
        //     "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // )}
        >
            {/* <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div> */}
            {/* <Link href="/contact">
                <blockquote className="text-xl hover:text-foreground">{body}</blockquote>
            </Link> */}
            <blockquote className="text-xl cursor-pointer hover:text-foreground">{body}</blockquote>
        </figure>
    );
};

export function TextInfiniteScroll() {
    return (
        <div className="relative bg-muted text-muted-foreground">
            <Marquee
                // pauseOnHover
                className="[--duration:18s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
                {/* <span className='text-3xl'>
                    &#8226;
                </span> */}
            </Marquee>
            {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee> */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-card"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-card"></div>
        </div>
    );
}
