const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const logTime = new Date();
    console.log(method, url, logTime);
    next();
}

module.exports = logger;