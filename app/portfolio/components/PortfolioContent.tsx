import React from 'react'
import PortfolioCard from './PortfolioCard'
import BlurFade from '@/components/magicui/blur-fade'
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay'
import { Project } from '@/types'

interface ProjectProps {
    projects: Project[];
}

const PortfolioContent: React.FC<ProjectProps> = ({ projects }) => {
    return (
        <div className='container-grid max-w-[800px] mx-auto'>
            {projects.map((item, idx) => (
                <BlurFade key={item.id} delay={BLUR_FADE_DELAY * 4 + idx * 0.05}>
                    <PortfolioCard
                        image={item.cover}
                        title={item.title}
                        link={item.link}
                        githubLink={item.githubLink}
                        technologies={item.technologies}
                        description={item.description || ''}
                    />
                </BlurFade>
            ))}
        </div>
    )
}

export default PortfolioContent
