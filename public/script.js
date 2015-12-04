import React from "react"
import ReactDOM from "react-dom"
import GoogleLogo from "./GoogleLogo";
import UnorderedList from "./UnorderedList";

class H1C extends React.Component{
	render(){
		return (
			<div className="green">
				Hullo ES6
				<UnorderedList />
				<GoogleLogo />
			</div>
		);
	}
};


ReactDOM.render(<H1C />, document.getElementById('react'))
