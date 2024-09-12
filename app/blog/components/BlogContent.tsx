import React from 'react'
import BlogItem from './BlogItem'
import { Blog } from '@/types';
import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';


interface BlogCententProps {
    blogs: Blog[];
}

const BlogContent: React.FC<BlogCententProps> = ({ blogs }) => {
    return (
        <div className="mt-12 container-grid">
            {blogs?.map((blog, idx) => (
                <BlurFade
                    delay={BLUR_FADE_DELAY * 4 + idx * 0.05}
                    key={idx}>
                    <BlogItem
                        title={blog.title}
                        image={blog.image}
                        tags={blog.tags}
                        createdAt={blog.createdAt || new Date()}
                        slug={blog.slug}
                        content={blog.content}
                    />
                </BlurFade>
            ))}
        </div>
    )
}

export default BlogContent