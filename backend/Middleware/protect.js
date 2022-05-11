const admin = require('../config/firebase-config');
exports.protect = async(req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            return res.json({ message: 'un authorized' })
        }
        req.client = decodeValue;
        next()
    } catch (e) {
        return res.json({ message: 'internal error' })
    }
}