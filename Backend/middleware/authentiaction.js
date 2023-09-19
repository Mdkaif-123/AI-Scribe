
const jwt = require('jsonwebtoken')

exports.verifyUserToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null
        if (!token) return res.status(404).json({ success: false, message: "Token not provided" })

        jwt.verify(token, process.env.AUTH_SECRET_KEY, (error, decoded) => {
            if (error) return res.status(404).json({ success: false, message: "Authentication failed", error })
            req.user = decoded.userId
            next()
        })

    } catch (error) {
        res.status(500).json({ success: false, message: "Authentication Failed", error });
    }
}