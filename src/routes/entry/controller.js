const { Database } = require('@jodu555/mysqlapi');
const database = Database.getDatabase();

const { v4: uuidv4 } = require('uuid');
uuidv4();

const get = async (req, res, next) => {
    try {
        const entrys = await database.get('entry').get({});
        res.json(entrys);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        req.body.UUID = uuidv4();
        const entry = await database.get('entry').create(req.body);
        res.json(entry);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const UUID = req.params.uuid;
        const updated = await database.get('entry').update({ UUID }, req.body);
        res.json(entry);
    } catch (error) {
        next(error);
    }
}

const del = async (req, res, next) => {

    try {
        const UUID = req.params.uuid;
        await database.get('entry').delete({
            UUID
        });
        res.json({ UUID });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    get,
    create,
    update,
    del
}