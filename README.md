# ArtemissGG website
ArtemisGG website

### Overview
We are creating a League of Legends application called Artemis, which enables one to extract data from previous matches about the enemy jungler. Allowing the user to find their most frequent jungle pathing and ganking routes. This will allow the user to watch out at specific times and prepare for high-danger time frames, avoiding a likely death. This application can also be used to look at professional junglers to see where and when they usually gank to help the new junglers if they are not sure where and when to gank.

### How to Run
'node app.js'

### Libraries
1. bodyParser: used to parse body of HTTP request.
2. connect-flash: used to send flash messages.
3. cookieparser: parse cookies in HTTP header
4. express: node framework
5. express-handlebars: handlbars engine to run with node
6. express-session: session library to maintain sessions
7. mongoose: object modeling tool to work with node and mongoose used with user model
8. morgan: used for server logging

### Views
The user will have two primary views. First, the search view allows the user to input another user’s summoner name into the search to find information about that user. This leads to the second primary view where the user’s information about jungling is presented. Everything the user came to find will be shown in this view. There's an about page that will show information about the application. Currently there's a team view however this will be changed to show champions that are being used in the jungle recently. There's a log in view that will allow users to log in. Account utilization will be implemented later. Lastly, there is the admin view which will allow crud operations over users.

### Statefulness
Currently we are planning on what to do with user accounts who are not admins. However, admins are able to use crud operations on user accounts.

### Persistence
Most of the data will be pulled from the league api. We have an api which currently only works with the user model. This api will allow basic crud operations on the users. These options include getting a single user, getting all users, creating a user, and deleting a user.
