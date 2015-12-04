// REACT APP....

var React = require("react");
var ReactDOM = require("react-dom");
var GoogleLogo = require("./GoogleLogo.js")


var H1C = React.createClass({
	render: function(){
		return (
			<div className="green">
				Hullo world
				<GoogleLogo />
			</div>
		)
	}
});




ReactDOM.render(<H1C />, document.getElementById('react'))
