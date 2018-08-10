const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/nodeappdatabase', {
mongoose.connect('mongodb://pawars-test:passwordtest1@ds235251.mlab.com:35251/pawars-test', {
    // useMongoClient: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});



userSchema.methods.manify = function(next) {
    this.name = this.name + '-boy';
    return next(null, this.name);
}

userSchema.pre('save', function(next) {
    const currendDate = new Date();

    this.updated_at = currendDate;

    if (!this.created_at) {
        this.created_at = currendDate;
    }
    next();
});

const User =  mongoose.model('User', userSchema);

const kenny = new User({
    name: 'Kenny',
    username: 'Kenny_the_boy',
    password: 'password'
});

kenny.manify(function(err, name) {
    if (err) throw err;
    console.log('Your new name is: ' + name);
});

const benny = new User({
    name: 'Benny',
    username: 'Benny_the_boy',
    password: 'password'
});

benny.manify(function(err, name) {
    if (err) throw err;
    console.log('Your new name is: ' + name);
});

const mark = new User({
    name: 'Mark',
    username: 'Mark_the_boy',
    password: 'password'
});

mark.manify(function(err, name) {
    if (err) throw err;
    console.log('Your new name is: ' + name);
});


// kenny.save(function(err) {
//     if (err) throw err;
//     console.log('User ' + kenny.name + ' has been saved.');
// });

// benny.save(function(err) {
//     if (err) throw err;
//     console.log('User ' + benny.name + ' has been saved.');
// });

// mark.save(function(err) {
//     if (err) throw err;
//     console.log('User ' + mark.name + ' has been saved.');
// });


const findAllUsers = function() {
    return (
            User.find({}).exec(function(err, res) {
            if (err) throw err;
            console.log('Records in database: ' + res);
        })
    )
}

const findSpecificRecord = function() {
    return (
            User.find({username: 'Kenny_the_boy'}).exec(function(err, res) {
            if (err) throw err;
            console.log('Record: ' + res);
        })
    )
}

const updateUserPassword = function() {
    return (
        User.find({username: 'Kenny_the_boy'}, function(err, user) {
            if (err) throw err;
            console.log('Old password is ' + user[0].password);
            user[0].password = 'newPassword';
            console.log('New password is: ' + user[0].password);

            user[0].save(function(err) {
                if (err) throw err;
                console.log('User ' + user[0].name + ' has been updated');
            })
        })
    )
}

const updateUsername = function() {
    return (
            User.findOneAndUpdate({username: 'Benny_the_boy'}, {username: 'Benny_the_man'}, {new: true}, function(err, user) {
            if (err) throw err;
            console.log('Username after update: ' + user);
        })
    )
}

const findBennyAndRemove = function() {
    return (
        User.findOneAndRemove({username: 'Benny_the_man'})
            .then(function(user) {
                return user.remove(function() {
                    console.log('user deleted');
                });
            })
    )
}

const findKennyAndRemove = function() {
    return (
        User.findOneAndRemove({username: 'Kenny_the_boy'})
            .then(function(user) {
                return user.remove(function() {
                    console.log('user deleted');
                });
            })
    )
}

const findMarkAndRemove = function() {
    return (
        User.findOneAndRemove({username: 'Mark_the_boy'})
            .then(function(user) {
                return user.remove(function() {
                    console.log('user deleted');
                });
            })
    )
}

Promise.all([kenny.save(), mark.save(), benny.save()])
    .then(findAllUsers)
    .then(findSpecificRecord)
    .then(updateUserPassword)
    .then(updateUsername)
    .then(findMarkAndRemove)
    .then(findKennyAndRemove)
    .then(findBennyAndRemove)
    .catch(console.log.bind(console));

