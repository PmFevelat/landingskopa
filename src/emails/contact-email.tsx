import { Html, Head, Body, Container, Text, Hr } from '@react-email/components';

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'system-ui' }}>
                <Container>
                    <Text>Nouveau message de contact :</Text>
                    <Hr />
                    <Text><strong>Nom :</strong> {name}</Text>
                    <Text><strong>Email :</strong> {email}</Text>
                    <Text><strong>Message :</strong></Text>
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
} 