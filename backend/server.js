import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: '&&&&&&&&',
    socket: {
        host: 'redis-10817.crce175.eu-north-1-1.ec2.redns.redis-cloud.com',
        port: 10817
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

console.log(await client.get('vova')) 
console.log(await client.get('foo')) 

