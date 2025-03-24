import { Button } from './ui/button'
import { SendHorizonal } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedGroup } from './motion-primitives/animated-group'

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden py-16 md:py-32">
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                delayChildren: 0.2,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.3,
                                duration: 2,
                            },
                        },
                    },
                }}
                className="absolute inset-0 -z-20">
                <Image
                    src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                    alt="background"
                    className="absolute inset-x-0 -z-20 brightness-50"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Tired of endless reviews? Try a smarter way to choose.</h2>

                    <div className="mt-10 flex justify-center lg:mt-12">
                        <div className="bg-foreground/10 rounded-[var(--radius)] border p-0.5">
                            <Button
                                asChild
                                size="lg"
                                className="px-5 text-base">
                                <Link href="/waitlist">
                                    <span className="text-nowrap">Join the Waitlist</span>
                                    <SendHorizonal className="relative size-5 md:hidden" strokeWidth={2} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
