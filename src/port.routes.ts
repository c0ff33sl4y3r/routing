import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';

export async function main() {
    return routes('/api')
    // Handle `/api` instead of `/`
    .get('/', () => new Response('Hi'));
}