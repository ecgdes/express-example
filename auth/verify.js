const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) res.redirect(401, "auth/login");
  else {
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.verified = verified;
      next();
    } catch (err) {
      res.redirect(403, "/auth/login");
    }
  }
};

module.exports = auth;
