import redis from 'redis';

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: 6379,
  prefix: 'blacklist:',
});

redisClient.on('connect', () => {
  console.log('Succesfully connected to Redis!');
});

redisClient.on('error', (err) => {
  console.log('Error connecting to Redis:', err);
});

export default redisClient;
