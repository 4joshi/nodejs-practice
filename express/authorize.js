const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user == '4joshi'){
        req.user = { name: user, id : 123 };
        next();
    }
    else 
        res.status(401).send('Unauthorized');
}

module.exports = authorize;