var restful = require('node-restful');
var mongoose = restful.mongoose;

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    admin: { type: Boolean,required:false}
});

//Password verification
UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = restful.model('user', UserSchema);

module.exports.login = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') {
        return res.send(401);
    }

    db.userModel.findOne({username: username}, function (err, user) {
        if (err) {
            console.log(err);
            return res.send(401);
        }

        user.comparePassword(password, function(isMatch) {
            if (!isMatch) {
                console.log("Attempt failed to login with " + user.username);
                return res.send(401);
            }

            var token = jwt.sign(user, secret.secretToken, { expiresInMinutes: 60 });

            return res.json({token:token});
        });

    });
};
