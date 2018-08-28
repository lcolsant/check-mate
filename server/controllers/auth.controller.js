const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;
    User.findOne({ email })
      .then(async user => {
        const valid = await User.validatePassword(password, user.password);

        if (!valid) {
          throw new Error('password does not match');
        }

        // handle login
        completeLogin(request, response, user);
      })
      .catch(error => {
        console.log('error message: ', error.message);

        response.status(403).json({ error: 'user/password combo not found' });
      });
  },
  register(request, response) {
    console.log('registering user', request.body);
    User.create(request.body)
      .then(user => {
        // console.log('in auth controller....returned from api', user);
        // handle login
        completeLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID', { path: '/' });
    response.clearCookie('expiration', { path: '/' });
    response.json(true);
  },
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;
  console.log('request.session.user._id:', request.session.user._id);

  response.cookie('userID', user._id.toString());
  response.cookie('user_name', user.username.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}