import Image from 'next/image'

export default function FeaturesSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">A product page built for real decisions.</h2>
                            <p className="mt-6">No star ratings. No scrolling through dozens of opinions.<br/><br/>Each page delivers just what you need to decide — real use cases, proven outcomes, and on-demand answers from our AI trained on expert insights.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="relative aspect-[4/3] w-full">
                            <div className="absolute inset-0 rounded-[32px] bg-black">
                                <Image 
                                    src="/images/section4.png"
                                    className="hidden rounded-[32px] dark:block" 
                                    alt="Skopa interface" 
                                    fill
                                    priority
                                    style={{ 
                                        objectFit: 'contain', 
                                        objectPosition: 'center center',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                                <Image 
                                    src="/images/section4.png"
                                    className="block rounded-[32px] dark:hidden" 
                                    alt="Skopa interface" 
                                    fill
                                    priority
                                    style={{ 
                                        objectFit: 'contain', 
                                        objectPosition: 'center center',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 