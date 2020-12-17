const Post = require('../models/Post');

exports.get = async (req, res, next) => {
    try {
        var data = await Post.findAll();
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send({
            message: 'Unexpected error'
        })
    }
}

exports.getWithParams = async (req, res, next) => {
    try {
        var data = await Post.findAll({            
            where: { ...req.params }
        });
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send({
            message: 'Unexpected error'
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        const rows = await Post.update(req.body, {
            individualHooks: true,
            where: {
                authorId = await getUserIdByToken(req, res),
				...req.params
            }
        });

        if (rows[0] > 0) {
            res.status(200).send({ message: 'Successfully edited' });
        }
        else {
            res.status(500).send({ message: "Error at update, the register does not exist or you don't have the permission for this" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: 'Unexpected error'
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const rows = await Post.destroy(req.body, {  
            where: {
                authorId = await getUserIdByToken(req, res),
				...req.params
            }
        });

        if (rows > 0) {
            res.status(200).send({ message: 'Successfully deleted' });
        }
        else {
            res.status(500).send({ message: "Error while deleting, the register does not exist or you don't have the permission for this" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: 'Unexpected error'
        })
    }
}

