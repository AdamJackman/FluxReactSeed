import React from 'react';
import TenantActions from '../../actions/tenant-actions';
import TenantButton from './tenant-button';
import TenantStore from '../../stores/tenant-store';
import { Link } from 'react-router';

var overflowStyle = {
	overflow: 'hidden'
}

export default ( props ) => {
	return(
		<div className="col s3">
			<p className={ TenantStore.isTenantOwing( props.tenant) ? "text-danger" : "text-success"}> {TenantStore.isTenantOwing( props.tenant) ? "Overdue" : "Paid"}</p>
			<Link to={ `/tenant/${props.tenant.id}` } style={{textDecoration:'none'}}>
			<div className="card">
    			<div className="card-image waves-effect waves-block waves-light">
      				<img className="activator" src="http://placehold.it/250x250" />
    			</div>
	    		<div className="card-content">
	     			<span className="card-title activator grey-text text-darken-4">{ props.tenant.firstName } { props.tenant.lastName }</span>
	      			<p>
	      				Click here for more information
	      			</p>
			    </div>
	    		<div className="card-reveal">
	      			<span className="card-title grey-text text-darken-4">{ props.tenant.firstName } { props.tenant.lastName }</span>
	      			<p>Here is some more information about this product that is only revealed once clicked on.</p>
	    		</div>
  			</div>
  			</Link>

			<div className="text-center">
				<div className="btn-group">
					<TenantButton
						handler={
							TenantActions.paidTenant.bind(null, props.tenant)
						}
						txt="Paid"
					/>
					<TenantButton
						handler={
							TenantActions.notPaidTenant.bind(null, props.tenant)
						}
						txt="Owing"
					/>
				</div>
			</div>			
		</div>
	);
}



/*
			Old Style
			
  			<div className="valign-wrapper">
				<h4 className="valign">{ props.tenant.firstName }</h4>
			</div>
			<p className={ TenantStore.isTenantOwing( props.tenant) ? "text-danger" : "text-success"}> {TenantStore.isTenantOwing( props.tenant) ? "Overdue" : "Paid"}</p>
			<img className="img-responsive" src="http://placehold.it/250x250" width="100%" />			
			<div className="col s6">Phone Number:</div>
			<div className="col s6">{ props.tenant.contactNumber }</div>
			<div className="col s6">Email: </div>
			<div className="col s6" style={overflowStyle}>{ props.tenant.contactEmail }</div>
			<div className="text-center">

*/