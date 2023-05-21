import Account from '../models/Account.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as blacklist from '../redis/manipula-blacklist.js';

function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id,
  };

  const token = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '15m' });
  return token;
}

class AccountController {
  static findAccounts = (_req, res) => {
    Account.find((err, allAccounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allAccounts);
    });
  };

  static findAccountById = (req, res) => {
    const { id } = req.params;
    Account.findById(id, (err, account) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(account);
    });
  };

  static createAccount = async (req, res) => {
    const senhaHash = await this.gerarSenhaHash(req.body.senha);
    const account = new Account({
      ...req.body,
      senha: senhaHash,
      createdDate: Date(),
    });
    account.save((err, newAccount) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(201).set('Location', `/admin/accounts/${account.id}`).json(newAccount);
    });
  };

  static updateAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, account) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).set('Location', `/admin/accounts/${account.id}`).send({ message: 'Account successfully updated' });
    });
  };

  static deleteAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndDelete(id, (err) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(204).send({ message: 'Account successfully deleted' });
    });
  };

  static login = (req, res) => {
    const token = criaTokenJWT(req.user);
    res.status(204).set('Authorization', token).send();
  };

  static logout = async (req, res) => {
    try {
      const token = req.token;
      await blacklist.adiciona(token);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  };

  static async gerarSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }
}

export default AccountController;
