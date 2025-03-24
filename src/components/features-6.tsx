import Image from 'next/image'

export default function Features6() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Explore trusted tools in seconds</h2>
                    <p className="max-w-sm sm:ml-auto">Instantly visualize the SaaS tools your peers and industry actually use, discover popular stacks, and access actionable insights to guide your decisions.</p>
                </div>
                <div className="relative bg-black -mx-6 md:-mx-12 lg:col-span-3 overflow-hidden">
                    <div className="aspect-[2/1] relative -mr-8">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-30"></div>
                        <div className="w-[calc(100%+32px)] h-full relative -mt-[1px] scale-[1.03] translate-x-1">
                            <Image 
                                src="/images/skopa-dashboard.png" 
                                className="object-contain" 
                                alt="Skopa dashboard interface" 
                                fill
                                style={{ objectFit: 'contain' }}
                                priority 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
