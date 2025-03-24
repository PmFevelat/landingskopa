import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import Image from 'next/image'

export default function BackgroundStars() {
    return (
        <>
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                delayChildren: 0,
                                staggerChildren: 0,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            },
                        },
                    },
                }}
                className="absolute inset-0 -z-20">
                <Image
                    src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                    alt="background"
                    className="absolute inset-x-0 -z-20 brightness-75"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
        </>
    )
} 