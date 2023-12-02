# TwitterApp

TwitterApp is a simple web application for posting and viewing tweets. Users can register, log in, create tweets, and explore the timeline.

## Features

- **User Authentication**: Users can register with a unique username and email, and log in securely.
- **Tweet Creation**: Authenticated users can create tweets to share their thoughts and ideas.
- **Timeline**: Explore the timeline to view tweets posted by other users.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and tweet data.
- **Passport**: Authentication middleware for Node.js.
- **Pug**: Template engine for rendering views.

## Getting Started

1. Clone the repository:

	```bash
	git clone https://github.com/ivanjocc/project_nodejs.git
2. Clone the repository:

	```bash
	npm install
3. Configure MongoDB:
- Create a MongoDB database named "twitter".
- Create two collections: "users" and "tweets".

4. Set up environment variables:

	Specify the following:

	```bash
	PORT=3000
	MONGODB_URI=mongodb://localhost:27017/twitter
5. Run the application:

	```bash
	npm start
The application will be accessible at http://localhost:3000.


## Contributing

If you'd like to contribute, please fork the repository and create a pull request. Issues and feature requests are also welcome!