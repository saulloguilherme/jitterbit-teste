export default function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;

    res.status(status).json({
        error: err.constructor.name,
        message: err.message,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.originalUrl
    });
}