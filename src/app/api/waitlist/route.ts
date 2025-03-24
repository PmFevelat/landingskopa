import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import WaitlistEmail from '@/emails/waitlist-email';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        await resend.emails.send({
            from: 'Skopa <onboarding@resend.dev>',
            to: 'pierremarie.fevelat@gmail.com',
            subject: 'Nouvelle inscription à la liste d\'attente Skopa',
            react: WaitlistEmail({ name, email, message }),
        });

        return NextResponse.json({ success: true });
    } catch (_error) {
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
} 