import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';
import { qs } from '@stricjs/utils';

export async function main() {
    return routes('/:port').get('', c => {
        const port = c.params.port;
        const json = c.json();
        console.log(qs.parse(qs.string(c)), json)
        return text(`Hello from port ${port}`);
})
}

