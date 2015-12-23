import React from 'react';
import TenantActions from '../actions/tenant-actions';
import TenantButton from './tenant-button';

var overflowStyle = {
	overflow: 'hidden'
}
//visible|hidden|scroll|auto|initial|inherit;

export default ( props ) => {
	return(
		<div className="col s3">
			<div className="valign-wrapper">
				<h4 className="valign">{ props.tenant.firstName }</h4>
			</div>
			<img className="img-responsive" src="http://placehold.it/250x250" width="100%" />			
			<div className="col s6">Phone Number:</div>
			<div className="col s6">{ props.tenant.contactNumber }</div>
			<div className="col s6">Email: </div>
			<div className="col s6" style={overflowStyle}>{ props.tenant.contactEmail }</div>
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
