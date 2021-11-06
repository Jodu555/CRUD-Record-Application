

const get = (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};

const create = (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

const update = (req, res, next) => {
    try {
        const uuid = req.params.uuid;

    } catch (error) {
        next(error);
    }
}

const del = (req, res, next) => {

    try {
        const uuid = req.params.uuid;

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