"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Admin</h1>
				<p>React, React Router, and Flux</p>
			</div>
		);
	}
});

module.exports = Home;