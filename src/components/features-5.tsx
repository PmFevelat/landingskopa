import { Zap, BarChart3, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Personalized insights from day one</h2>
                            <p className="mt-6">Instantly sync your LinkedIn contacts and current SaaS tools—get immediate clarity on what your network trusts.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Linkedin className="size-5" />
                                LinkedIn network integration
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Quick SaaS stack setup
                            </li>
                            <li>
                                <BarChart3 className="size-5" />
                                Immediate market benchmarks
                            </li>
                        </ul>
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="relative overflow-hidden rounded-[32px] bg-black">
                            <Image src="/images/sync2.png" className="hidden w-full dark:block" alt="Network visualization interface" width={1207} height={929} />
                            <Image src="/images/sync2.png" className="w-full dark:hidden" alt="Network visualization interface" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
