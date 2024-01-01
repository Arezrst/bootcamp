const jwt = require('jsonwebtoken');

function tokenValidator(req, res, next) {
  const token = req.headers?.authoraization?.split(' ')[1];
  if (!token) res.status(401).json("Unauthorized!");
  // if (payload.exp < Math.floor(new Date().getTime() / 1000)) res.json("Invalid token");
  // const payload = jwt.decode(token);
  try {
    jwt.verify(token, "secret");
    next()
  } catch (error) {
    res.status(401).json("Unauthorized!");
  }
}

module.exports = tokenValidator;
