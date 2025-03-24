import { Star, Sparkles, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection3() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-3">
                        <div className="relative aspect-[4/3] w-full">
                            <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                                <Image 
                                    src="/images/section2.png"
                                    className="hidden dark:block" 
                                    alt="Skopa interface" 
                                    fill
                                    priority
                                    style={{ 
                                        objectFit: 'cover', 
                                        objectPosition: 'center center',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                                <Image 
                                    src="/images/section2.png"
                                    className="block dark:hidden" 
                                    alt="Skopa interface" 
                                    fill
                                    priority
                                    style={{ 
                                        objectFit: 'cover', 
                                        objectPosition: 'center center',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="md:pl-6 lg:pl-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Get tailored recommendations — not endless lists.</h2>
                            <p className="mt-6">Forget star ratings and generic filters. Skopa gives you three high-signal picks based on your company profile and growth needs.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Star className="size-5" />
                                The best fit
                            </li>
                            <li>
                                <Sparkles className="size-5" />
                                A proven alternative
                            </li>
                            <li>
                                <Lightbulb className="size-5" />
                                A smart wildcard you didn't expect
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
} 