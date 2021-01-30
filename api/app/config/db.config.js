require('dotenv').config();

const URL = process.env.DB_URL || 'mongodb://localhost/issuetracker';

module.exports = {
    url: URL
};

