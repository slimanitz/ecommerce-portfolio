const jwt = require('jsonwebtoken');
const User = require('../api/models/user');
const { jwtSecret } = require('../config/vars');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line consistent-return
    jwt.verify(token, jwtSecret, async (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      const dbUser = await User.findById(user.id);
      if (dbUser) {
        req.user = dbUser;
        return next();
      }
      res.sendStatus(401);
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
