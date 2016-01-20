import React from 'react';
import { Link } from 'react-router';

export default ( props ) => {
	return(
	    <li>
	    	<Link to={ `/properties/${props.property.id}` } style={{textDecoration:'none'}} id="navTab" className="collection-item">
	            <div className="row navTabRow">
	            	<div className="col s4">
	            		<img className="activator navTabImg" src="http://placehold.it/55x55" />
	            	</div>
	            	<div className="col s8 navTabInfo">
		            	<div>{props.property.addr_line1}</div>
		            	<div>{props.property.city}</div>
		            	<div>{props.property.zip}</div>
	            	</div>
				</div>
			</Link>
	    </li>
	);
}