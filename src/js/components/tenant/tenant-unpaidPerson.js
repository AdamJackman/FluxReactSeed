import React from 'react';
import TenantButton from './tenant-button';
import TenantActions from '../../actions/tenant-actions';

export default ( props ) => {

	return (
		
		<tr>
			<td> { props.tenant.firstName } </td>
			<td> { props.tenant.lastName } </td>
			<td> ${ props.tenant.rentCost } </td>
			<td> ${ props.tenant.rentBehind } </td>
			<td>
				<div className="btn-group">
					<TenantButton
						handler={ TenantActions.paidTenant.bind(null, props.tenant ) }
						txt="Paid"
					/>
					<TenantButton
						handler={ TenantActions.notPaidTenant.bind(null, props.tenant ) }
						txt="Owing"
					/>
				</div>
			</td>
			<td>${ props.tenant.rentCost + props.tenant.rentBehind } </td>
		</tr>
	);
}

