import React from 'react';

export default ( props ) => {
	return (
		<button
			className="waves-effect waves-teal btn" 
			onClick={ props.handler }>
			{ props.txt }
		</button>
	);
}