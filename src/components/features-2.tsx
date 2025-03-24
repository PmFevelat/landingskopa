import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { LineChart, Network, Brain } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">All the insights you need to pick the right software</h2>
                    <p className="mt-4">See real-time adoption, explore popular stacks, and get clear answers from our AI.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto mt-8 gap-8 *:text-center md:mt-16">
                    <Card className="group aspect-[4/3] rounded-3xl border border-zinc-800 bg-black p-6 transition-colors duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <LineChart className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-xl font-medium">Real-time SaaS adoption data</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-zinc-400">See instantly what's popular within your network and industry.</p>
                        </CardContent>
                    </Card>

                    <Card className="group aspect-[4/3] rounded-3xl border border-zinc-800 bg-black p-6 transition-colors duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Network className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-xl font-medium">Stack exploration simplified</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-zinc-400">Visualize not just individual tools, but the most adopted combinations.</p>
                        </CardContent>
                    </Card>

                    <Card className="group aspect-[4/3] rounded-3xl border border-zinc-800 bg-black p-6 transition-colors duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Brain className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-xl font-medium">AI-powered, unbiased insights</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-zinc-400">Cut through marketing noise and ask precise questions directly to our AI.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-28 duration-200">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-black absolute inset-0 from-transparent to-75%" />
        <div className="absolute inset-0 m-auto flex size-10 items-center justify-center border border-zinc-800 bg-black transition-colors duration-500 group-hover:border-zinc-700 group-hover:bg-zinc-900/50">{children}</div>
    </div>
)
