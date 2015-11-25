var express = require('express');

// This gives us access to the user "model".
var model = require('../lib/user');

// A list of users who are online:
var online = require('../lib/online').online;

// This creates an express "router" that allows us to separate
// particular routes from the main application.
var router = express.Router();



router.get('/list', (req, res) => {
  // TODO: Add the admin list route.
  // The admin list route lists the current users in the system and
  // provides a form to add a new user. You must make sure you do
  // the following in this route:
  //
  //   (1) Grab the user session object.
  //   (2) Test that the user session object exists. If not, a redirect
  //       back to the login view is necessary with a proper flash message.
  //   (3) Test if the user session exists and they are not online. If
  //       the user session exists and they are not online it means the
  //       server has been restarted and their session has expired. If
  //       this is the case you will need to redirect back to login with
  //       a proper flash message (e.g., login expired).
  //   (4) Test is the user is an admin. If they are not you need to
  //       redirect back to main with a proper flash message - indicate
  //       that the user needs admin credentials to access this route.
  //   (5) If the user is logged in, is online, and is an admin then
  //       you want to retrieve the list of users from the `lib/user.js`
  //       library and render the `user-list` view. The `user-list` view
  //       expects an array of users and a message. You should grab the
  //       flash message - if one exists, and pass it to the view template.
  //       A flash message will exist if the user tried to create a new
  //       user that already exists in our mock database.
  //
  //  You will be graded on each of the above items.

  // Replace below with your own implementation.
//1
var s = req.session;
  switch(true) {
    //2
    case (s.user == null):
      req.flash('login', 'Your not logged in...');
      res.redirect('/user/login');
      break;
      //3
    case (online[s.user.name] == null):
      req.flash('login', 'Login session has expired. Please log again!');
      res.redirect('/user/login');
      break;
      //4
    case (s.user.admin == false):
      req.flash('main','Sorry! You need to be administrator to access this area');
      res.redirect('/user/main');
      break;
      //5
    default:
     model.list(function(error, users) {
      res.render('user-list', { users: users, message: req.flash('user-list')});
    });

  }

});

router.post('/user', (req, res) => {
  // TODO: Implement the /user route.
  // This route is similar to the /user/auth route in that it does not
  // have an associated view. Rather, its job is to add a new user and
  // redirect to /admin/list. Its job is to add a new user if the user
  // does not already exist in our model. You must make sure you do
  // the following in this route:
  //
  //   (1) Grab the user session object.
  //   (2) Test that the user session object exists. If not, a redirect
  //       back to the login view is necessary with a proper flash message.
  //   (3) Test if the user session exists and they are not online. If
  //       the user session exists and they are not online it means the
  //       server has been restarted and their session has expired. If
  //       this is the case you will need to redirect back to login with
  //       a proper flash message (e.g., login expired).
  //   (4) Test is the user is an admin. If they are not you need to
  //       redirect back to main with a proper flash message - indicate
  //       that the user needs admin credentials to access this route.
  //   (5) If the user is logged in, they are online, and they are an
  //       admin then you need to grab the form variables from the
  //       `req.body` object. Test to make sure they all exist. If they
  //       do not then you need to redirect back to the `/list` route
  //       defined above with a proper flash message.
  //   (6) If you have received the proper form variables then you must
  //       create a new user using the `model.add` function. If an error
  //       message is returned in the callback you should flash that message
  //       to the `list` route above passing it the error message returned
  //       from the `model.add` function and redirect to `list`.
  //       Otherwise, you should flash to `list` that the user has
  //       been added and redirect back to the `list` route.
  //
  //  You will be graded on each of the above items.

  // Replace below with your implementation.
  var s = req.session;
//using switch statement might not be ideal... if statements might be better for future ref
    switch(true){
    case (s.user == null):
      req.flash('login', 'Your not logged in...');
      res.redirect('/user/login');
      break;
    case (online[s.user.name] == null):
      req.flash('login', 'Login session has expired. Please log again!');
      res.redirect('/user/login');
      break;
    case (s.user.admin == false):
      req.flash('main','Sorry! You need to be administrator to access this area');
      res.redirect('/user/main');
      break;
    }


    var body = req.body;

        if ( (body.name != null) && (body.pass != null) && (body.admin != null) ) {
         body.admin = (body.admin == 'yes') ? true: false;

          model.add({name:body.name, pass:body.pass, admin:body.admin}, 
            function(error, user){
              if (!error) {
                req.flash('user-list', 'the admin has successfully added a user!');
                res.redirect('/admin/list');
              }
         
                req.flash('user-list', error);
                res.redirect('/admin/list');
        
      });
    }
  
      req.flash('user-list', 'you did not fill the required fields!')
      res.redirect('/admin/list');
});

module.exports = router;