import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Ici, vous pouvez ajouter la logique pour envoyer l'email, sauvegarder dans une base de données, etc.
        console.log('Contact form submission:', { name, email, message });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { message: 'Error processing request' },
            { status: 500 }
        );
    }
} 