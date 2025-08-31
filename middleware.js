
module.exports.isLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', "Login to continue !")
    return res.redirect('/auth/login');
};