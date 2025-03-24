import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import ContactEmail from '@/emails/contact-email';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        await resend.emails.send({
            from: 'Skopa <onboarding@resend.dev>',
            to: 'pierremarie.fevelat@gmail.com',
            subject: 'Nouveau message de contact Skopa',
            react: ContactEmail({ name, email, message }),
        });

        return NextResponse.json({ success: true });
    } catch (_error) {
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
} 