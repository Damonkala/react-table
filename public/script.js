// REACT APP....

var React = require("react");
var ReactDOM = require("react-dom");
var GoogleLogo = require("./GoogleLogo.js")


var H1C = React.createClass({
	render: function(){
		return React.createElement("div", {className: "green"},
			"Hello world", React.createElement(GoogleLogo));
	}
});




// ReactDOM.render(React.createElement(GoogleLogo), document.getElementById('react'))
ReactDOM.render(React.createElement(H1C), document.getElementById('react'))
