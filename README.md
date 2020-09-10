#### Overview
This web app lets users notate guitar chords in the browser. Users generate blank chord diagrams and place dots to indicate finger positions. All the diagrams are generated with SVG's.

#### Running the app
You will need Docker installed, and a Mongo database hosted on mLab.
The Node backend is in a Docker container, the React front end is not.
````
git clone https://github.com/AntonEmery/chord-app.git
cd chord-app
# Install Node dependencies
npm install
cd src/client
# Install React dependencies
npm install

# Start up the Node server from the root project directory after starting Docker
make docker

# Server should be running on port 8080

# Start the React client
cd src/client
npm start
# Navigate to http://localhost:3000/ in your browser

# To shut down Docker containers
docker system prune -a
````
##### Env file
The Node backend uses a `variables.env` in `src/server` file to connect to the Mongo database and Mailtrap.io, a service used to test emails sent to users.  You will need to create that file and fill in your specific data.
````
NODE_ENV=development
DATABASE=mongodb address and credentials
MAIL_USER=mailtrap.io user
MAIL_PASS=mailtraip.io password
MAIL_HOST=mailtrap.io host
MAIL_PORT=port
````

#### Technologies Used
  - **Create React App** - Used on the client side for easy bootstrapping of React
  - **Node.js/Express** - Handles the requests to the database for user creation/login and displaying of chordsheets belonging to that user.
  - **MongoDB** - where the data is stored
  - **Passport.js** - Authentication middleware for Node.js


