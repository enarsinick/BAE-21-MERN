module.exports.auth = (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.password;
    if (email && pass) {
        console.log(`${email} has been authenticated`);
        next();
    } else {
        res.status(401).send("Access Denied").end();
    }
};
