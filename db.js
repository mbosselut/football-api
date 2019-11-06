const Sequelize = require('sequelize');
const databaseUrl =
    process.env.DATABASE_URL ||
    'postgres://postgres:secret@localhost:5432/postgres';
const db = new Sequelize(databaseUrl);

db.sync()
    .then(() => console.log('Tables created successfully'))
    .catch(err => {
        console.error('Unable to create tables, shutting down...', err);
        process.exit(1);
    });

module.exports = db;
