const admin = require('../config/firebase-config');
exports.protect = async(req, res, next) => {
    console.log('auth')
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            return res.json({ message: 'un authorized' })
        }
        req.user = decodeValue;
        next()
    } catch (e) {
        return res.json({ message: 'internal error' })
    }
}