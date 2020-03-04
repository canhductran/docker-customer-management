const envVars = {
    SERVER_HOST: '0.0.0.0',
    SERVER_PORT: 3001,
    MONGO_HOST: '0.0.0.0',
    MONGO_PORT: 27017
}

const config = {
    host: envVars.SERVER_HOST,
    port: envVars.SERVER_PORT,
    mongo: {
        host: envVars.MONGO_HOST,
        port: envVars.MONGO_PORT
    }
};

module.exports = config;