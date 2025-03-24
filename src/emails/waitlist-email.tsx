import { Html, Head, Body, Container, Text, Hr } from '@react-email/components';

interface EmailTemplateProps {
    email: string;
}

export default function WaitlistEmail({ email }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'system-ui' }}>
                <Container>
                    <Text>Nouvelle inscription à la waitlist :</Text>
                    <Hr />
                    <Text><strong>Email :</strong> {email}</Text>
                </Container>
            </Body>
        </Html>
    );
} 