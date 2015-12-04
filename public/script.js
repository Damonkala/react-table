// REACT APP....

var React = require("react");
var ReactDOM = require("react-dom");

var H1C = React.createClass({
	render: function(){
		return React.createElement("h1", {className: "green"},
			"Changed Text");
	}
});




ReactDOM.render(React.createElement(H1C), document.getElementById('react'))
