const User = require('../models/User');
const authService = require('../services/auth-service');

module.exports = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const tokenData = await authService.decodeToken(token);
        const user = await User.findByPk(tokenData.id, {
            attributes: ['id', 'email', 'createdAt', 'updatedAt']
        });
        req.body.user = user;
        next();
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao executar a operação'
        });
    }
}