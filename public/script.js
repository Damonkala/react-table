// REACT APP....

// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react"
import ReactDOM from "react-dom"
// var GoogleLogo = require("./GoogleLogo.js")
import GoogleLogo from "./GoogleLogo";


import UnorderedList from "./UnorderedList";

var H1C = React.createClass({
	render: function(){
		return (
			<div className="green">
				Hullo world
				<UnorderedList />
				<GoogleLogo />
			</div>
		)
	}
});




ReactDOM.render(<H1C />, document.getElementById('react'))
