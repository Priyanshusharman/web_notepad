const jwt = require('jsonwebtoken');
const { model } = require('mongoose');
const jwt_secure_key = "i_a_transfer_of_energy"

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).json({ error: "Invalid token" });
    }
    try {
        const data = jwt.verify(token, jwt_secure_key);
        req.user = data.user;
    }
    catch (error) {
        return res.status(400).json({ error: "not found user" })
    }
    next();
}
module.exports = fetchuser;