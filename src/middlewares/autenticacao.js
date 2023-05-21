import passport from 'passport';

const local = (req, res, next) => {
  passport.authenticate('local', { session: false }, (erro, account) => {
    if (erro && erro.name === 'InvalidArgumentError') {
      return res.status(401).json({ erro: erro.message });
    }

    if (erro) {
      return res.status(500).json({ erro: erro.message });
    }

    if (!account) {
      return res.status(401).json();
    }

    req.user = account;
    return next();
  })(req, res, next);
};

const bearer = (req, res, next) => {
  passport.authenticate('bearer', { session: false }, (erro, account, info) => {
    if (erro && erro.name === 'JsonWebTokenError') {
      return res.status(401).json({ erro: erro.message });
    }

    if (erro && erro.name === 'TokenExpiredError') {
      return res.status(401).json({ erro: erro.message, expiradoEm: erro.expiredAt });
    }

    if (erro) {
      return res.status(500).json({ erro: erro.message });
    }

    if (!account) {
      return res.status(401).json();
    }

    req.token = info.token;
    req.user = account;
    return next();
  })(req, res, next);
};

export default {
  local, bearer,
};
