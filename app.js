//borrows some code from meadowlark, Tim Richards

var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

app.set('port', process.env.PORT || 5000);

// setup handlebars
var view = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', view.engine);
app.set('view engine', 'handlebars');

// setup static serving
app.use(express.static(__dirname + '/public'));


var team = require('./lib/team.js');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/info', (req, res) => {
	res.render('info');
});

app.get('/user-login', (req, res) => {
	res.render('user-login');
});

app.get('/team', (req, res) => {
	if (req.query.user == 'abhi') {
		res.send("<h1>Abhiteja Joginipally</h1> <p>Hi, my name is Abhiteja Joginipally. I'm a computer science student who's interested in web development. I've worked mainly with front end UI applications using Angular JS. As an artist I love working with rich web applications and giving them a creative spin. A fun fact about myself would be that I've done martial arts for nine years. My favorite foods consist of candy and fruits. <br><br> For this project I will primarily be working on the front end. I'll also be working throught the design and ux elements of the application. Using Bootstrap I'll also be scaffolding the application so that it has mobile functionality as \well. <br><br> Favorite Quote: 'Life is without meaning. You bring the meaning to it. The meaning of life is whatever you ascribe it to be. Being alive is the meaning.' Joseph Campbell </p>")
	}
	else if (req.query.user == 'andrew') {
		res.send("<h1>Andrew Chang</h1> <p>Greetings, my name is Andrew Chang. I'm a computer science major who's interested in adding  web development into my arsenal. A fun fact about myself would be that I've played the violin for over nine years. My favorite foods consist of veggies and pizzas.<br><br> For this project I will primarily be working on the database aspect through the use of MongoDB and figuring how to to implement it with the League of Legends API. I'll also be working through the design and ux elements of the application.<br><br> Favorite Quote: 'The cycle of life and death continues. We will live. They will die.' Nasus</p>")
	}
	else if (req.query.user == 'aditya') {
		res.send("<h1>Aditya Vaderiyattil</h1> <p>I am Aditya Vaderiyattil. I am a full stack developer that worked primarily on the the client side implementation of this website. I worked alongside Abhi in order to bring a friendly UI and a working implementation of the League of Legends API so that users could get the information they were looking for. <br><br> A fun fact about myself is that I am left-handed but I write and eat with my right hand.</p>")
	}
	else if (req.query.user == 'jimmy') {
		res.send("<h1>Jimmy Ly</h1> <p>I am Jimmy Ly. For the purpose of this project, I am a full-stack developer who wants to gain experience in each aspect of web programming. A fun fact is I've never done an actual website but I’ve tried running a small forum as a kid which ended with only 200 members. My favorite foods consist of dim sum and vietnamese food. <br><br> Since I’m primarily working on server side, I’ll be working with Node.js & Express. I'll also assist in client side to help deal with any unforeseen difficulties that may arise during implementation. <br><br> Favorite Quote: 'It’s not a bug, it’s a feature' - Unknown</p>")
	}
	else if (req.query.user == 'callum') {
		res.send("<h1>Callum Moore</h1> <p>Hola, my name is Callum Moore. I am on the software engineering track, looking to get a better grasp of the web development, in addition to just the software engineering process. I have a little experience with web development, but not using javascript.  I have used javascript before, namely to parse json data, and I have extensive experience with databases, namely elasticsearch.<br><br> I will be focused on the initial setup of the database. Team management, and spirit. Later I will move to learning and helping on any major obstacles that appears.<br><br> Favourite quote: “You miss 100% of the shots you don't take.” - Wayne Gretzky</p>")

	}
	else if (req.query.user == 'dhon') {
		res.send("<h1>Dhon</h1> <p>Howdy, I am Dhonovan Hauserman. Having taken a large number of Computer Science courses in High school such as programming and web design I found Computer Science to be my passion early in life. I was a member of my High School’s chapter of Business Professionals of America where I competed regionally and then nationally in programming and network design. I’m eager to expand on my my Computer Science skills in CS326. <br><br> For this project I will primarily be working on the server code to listen to requests and fetch resources needed from our database and forward them to the client. This will synergize well with the fact that I’m currently in CS320 and working on the back-end there including the database and server calls.</p>")
	}
	else {
			res.render('team');
	}
});


app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:' +
							app.get('port') + '; press Ctrl-C to terminate');
});
