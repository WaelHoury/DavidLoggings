const logger = require('./logger');

const requestLogger = (req, res, next) => {
    const { method, url } = req;
    const start = Date.now();
    const body = req.body ? JSON.stringify(req.body) : '';

    res.on('finish', () => {
        const duration = Date.now() - start;
        const message = `${method} ${url} ${res.statusCode} ${duration}ms`;

        if (res.statusCode >= 400) {
            logger.error(message);
        } else {
            logger.info(message);
        }
    });

    logger.request(`Incoming request: ${method} ${url} - Body: ${body}`);
    next();
};

module.exports = requestLogger;
