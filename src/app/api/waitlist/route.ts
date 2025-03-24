import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import WaitlistEmail from '@/emails/waitlist-email';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        await resend.emails.send({
            from: 'Skopa <onboarding@resend.dev>',
            to: 'pierremarie.fevelat@gmail.com',
            subject: 'Nouvelle inscription Waitlist Skopa',
            react: WaitlistEmail({ email }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error processing waitlist request' },
            { status: 500 }
        );
    }
} 