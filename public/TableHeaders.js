import React from "react"

class TableHeaders extends React.Component{
	render(){
		let heads = Object.keys(this.props.data[0]);
		heads = heads.map( key => {
			return <th> {key} </th>
		})
			return(
				<thead>
					<tr>
						{heads}
					</tr>
				</thead>
			)
	}
}


export default TableHeaders;
