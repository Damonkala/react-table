import React from "react"
import ReactDOM from "react-dom"

// import GoogleLogo from "./GoogleLogo";
import UnorderedList from "./UnorderedList";

class Greet extends React.Component{
	render(){
		return (
			<div className="green">
				{this.props.greeting} {this.props.children}
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div>

				<Greet greeting="Hi">
					<b>Nick</b>
				</Greet>

				<Greet greeting="Howdy">
					Cade
				</Greet>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('react'))
