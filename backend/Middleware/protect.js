const admin = require('../config/firebase-config');
exports.protect = async(req, res, next) => {
    console.log('auth')
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        console.log(decodeValue)
        if (!decodeValue) {
            return res.json({ message: 'un authorized' })
        }
        req.client = decodeValue;
        next()
    } catch (e) {
        return res.json({ message: 'internal error' })
    }
}