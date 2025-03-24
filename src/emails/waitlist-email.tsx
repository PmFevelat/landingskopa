import { Html, Head, Body, Container, Text, Hr } from '@react-email/components';

interface EmailTemplateProps {
    email: string;
}

export default function WaitlistEmail({ email }: EmailTemplateProps) {
    return (
        <div>
            <h1>Nouvelle inscription à la waitlist</h1>
            <p>Email: {email}</p>
        </div>
    );
} 