const config = {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT
    }
};

module.exports = config;