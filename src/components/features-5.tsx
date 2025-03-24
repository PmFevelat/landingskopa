import { FileText, Network, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Start with your company — we'll handle the rest.</h2>
                            <p className="mt-6">Just type your company name. Skopa uses public signals, intent data, and market context to personalize recommendations from the very first second.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <FileText className="size-5" />
                                Autofill your company profile
                            </li>
                            <li>
                                <Network className="size-5" />
                                Match with real-world SaaS usage
                            </li>
                            <li>
                                <Sparkles className="size-5" />
                                Get curated recommendations instantly
                            </li>
                        </ul>
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="relative overflow-hidden rounded-2xl bg-black">
                            <Image 
                                src="/images/getstarted.png" 
                                className="hidden w-full dark:block" 
                                alt="Network visualization interface" 
                                width={1207} 
                                height={929}
                                priority
                                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            />
                            <Image 
                                src="/images/getstarted.png" 
                                className="w-full dark:hidden" 
                                alt="Network visualization interface" 
                                width={1207} 
                                height={929}
                                priority
                                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
