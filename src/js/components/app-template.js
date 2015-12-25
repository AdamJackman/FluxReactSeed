import React from 'react';
import Header from './header/app-header';

export default ( props ) => {
	return(
		<div>
			<Header />
			<div className="container">						
				{ props.children }
			</div>
		</div>
	);
}