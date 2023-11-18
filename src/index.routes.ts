import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';

export async function main() {
    return routes()
        .get('/', c => text('Hello World!'))
        .post('/', c => c.json().then(json));
}
