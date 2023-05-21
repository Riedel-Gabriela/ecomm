import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Account from '../models/Account.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { InvalidArgumentError } from '../erros.js';
import * as blacklist from '../redis/manipula-blacklist.js';

async function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash);
  if (!senhaValida) {
    throw new InvalidArgumentError('E-mail ou senha inválidos');
  }
}

function verificaAccount(account) {
  if (!account) {
    throw new Error('Conta não encontrada');
  }
}

async function verificaTokenNaBlacklist(token) {
  const tokenNaBlacklist = await blacklist.contemToken(token);
  if (tokenNaBlacklist) {
    throw new jwt.JsonWebTokenError('Token inválido por logout!');
  }
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false,
  }, async (email, senha, done) => {
    try {
      const account = await Account.findOne({ email });
      verificaAccount(account);
      await verificaSenha(senha, account.senha);
      done(null, account);
    } catch (error) {
      done(error);
    }
  }),
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await verificaTokenNaBlacklist(token);
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        const account = await Account.findById(payload.id);
        done(null, account, { token });
      } catch (erro) {
        done(erro);
      }
    },
  ),
);
