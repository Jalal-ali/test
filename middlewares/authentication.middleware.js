const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, 'aejrhbwegiufbwbe6u7854yugt7384tgbfweuigf327');
      if (decoded) {
        const userID = decoded.userID;
        req.body.userID = userID;
        next();
      } else {
        res.send("Please Login first");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    res.send(`Please Login`);
  }
};
module.exports = {
  authenticate,
};
