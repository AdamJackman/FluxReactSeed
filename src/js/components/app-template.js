import React from 'react';
import Header from './header/app-header';
import PropertyNav from './property/property-nav';

export default ( props ) => {
	return(
		<div>
			<Header />			
			<PropertyNav />
			<div className="container">										
				{ props.children }
			</div>
		</div>
	);
}