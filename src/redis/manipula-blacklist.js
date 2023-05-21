import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { createHash } from 'crypto';
import redisClient from './blacklist.js';

const existsAsync = promisify(redisClient.exists).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

const geraTokenHash = (token) => createHash('sha256')
  .update(token)
  .digest('hex');

const adiciona = async (token) => {
  const dataExpiracao = jwt.decode(token).exp;
  const tokenHash = geraTokenHash(token);
  await setAsync(tokenHash, '');
  redisClient.expireat(tokenHash, dataExpiracao);
};

const contemToken = async (token) => {
  const tokenHash = geraTokenHash(token);
  const resultado = await existsAsync(tokenHash);
  return resultado === 1;
};

export {
  adiciona,
  contemToken,
};
