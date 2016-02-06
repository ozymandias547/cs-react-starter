var domready = require('domready');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;


require('./scss/base.scss');

domready(function () {
  
	ReactDOM.render(
		(
	  		<Router history={browserHistory}>
	    		<Route path="/" component={Home}></Route>
	    		<Route path="/page2" component={Page2}></Route>
	  		</Router>
		), 
	document.querySelector(".reactApp"))


})

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Link to={`/page2`}>Page2</Link>
			</div>
		)
	}
})

var Page2 = React.createClass({
	render: function() {
		return (
			<div>
				<Link to={`/`}>Home</Link>
			</div>
		)
	}
})
