import React from 'react';
import UnpaidTenantSummary from './app-unpaidTenantSummary';
import { Link } from 'react-router';

export default () => {
	return (		
		<nav>
			<div className="nav-wrapper deep-orange lighten-1">				
			 	<Link to="/" className="brand-logo" style={{marginLeft:'5%', textDecoration:'none'}}>   		
			  		Landlord App
			 	</Link>			 	
			 	<UnpaidTenantSummary />
			</div>
		</nav>
	);
}

/*
<div>
	<div className="col s2">
		<h4>Landlord App</h4>
		<div className="col s10 text-right">
			<UnpaidTenantSummary />
		</div>
	</div>		
</div>
*/