import React from "react";

var UnorderedList = React.createClass({
	render: function(){
		return (
			<ul className="list">
				<li>Its easy</li>
				<li>Its involved</li>
				<li>More fun than regular HTML</li>
			</ul>
		)
	}
});

export default  UnorderedList;
