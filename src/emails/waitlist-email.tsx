import { Html, Head, Body, Container, Text, Hr } from '@react-email/components';

interface WaitlistEmailProps {
    name: string;
    email: string;
    message?: string;
}

export default function WaitlistEmail({ name, email, message }: WaitlistEmailProps) {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'system-ui' }}>
                <Container>
                    <Text>Nouvelle inscription à la liste d&apos;attente :</Text>
                    <Hr />
                    <Text><strong>Nom :</strong> {name}</Text>
                    <Text><strong>Email :</strong> {email}</Text>
                    {message && (
                        <>
                            <Text><strong>Message :</strong></Text>
                            <Text>{message}</Text>
                        </>
                    )}
                </Container>
            </Body>
        </Html>
    );
} 