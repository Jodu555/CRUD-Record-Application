
const createTable = () => {
    const { Database } = require('@jodu555/mysqlapi');
    const database = Database.getDatabase();
    // link date start end
    database.createTable('entry', {
        options: {
            timestamps: true,
            PK: 'UUID'
        },
        'UUID': 'varchar(64)',
        'link': 'varchar(64)',
        'date': 'varchar(64)',
        'startTime': 'varchar(64)',
        'endTime': 'varchar(64)',
        'status': 'varchar(64)',
    });

}

module.exports = { createTable };