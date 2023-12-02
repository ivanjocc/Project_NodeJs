// Exporting a module with an authentication middleware
module.exports = {
	// Middleware function to ensure that the user is authenticated
	ensureAuthenticated: function (req, res, next) {
		// Check if the user is authenticated
		if (req.isAuthenticated()) {
			// If authenticated, proceed to the next middleware or route handler
			return next();
		}
		// If not authenticated, redirect the user to the login page
		res.redirect('/users/login');
	},
};
