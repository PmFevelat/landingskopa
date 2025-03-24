import { Resend } from 'resend';

// Initialisation de Resend avec une clé API temporaire
// Vous devrez configurer la vraie clé API dans les variables d'environnement de Vercel
export const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key'); 