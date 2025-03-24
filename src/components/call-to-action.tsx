import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ready to make smarter software decisions?</h2>

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
