import React from 'react';

export default ( props ) => {
	return (
		<button
			className="waves-effect waves-teal btn navButton">
			{ props.txt }
		</button>
	);
}