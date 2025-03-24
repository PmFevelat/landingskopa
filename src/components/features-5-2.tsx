import { MessageSquare, Star, Brain } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/images/ai.png" 
                                className="hidden w-full h-auto rounded-[15px] dark:block" 
                                alt="AI visualization interface" 
                                width={1207} 
                                height={929}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image src="/images/ai.png" 
                                className="w-full h-auto rounded-[15px] shadow dark:hidden" 
                                alt="AI visualization interface" 
                                width={1207} 
                                height={929}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="md:pl-6 lg:pl-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Instant answers, zero scrolling</h2>
                            <p className="mt-6">Stop scrolling through endless reviews. Ask specific questions and instantly get precise insights, synthesized from your chosen trusted sources.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <MessageSquare className="size-5" />
                                Reddit
                            </li>
                            <li>
                                <Star className="size-5" />
                                G2 & Capterra
                            </li>
                            <li>
                                <Brain className="size-5" />
                                Skopa Insights
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
} 