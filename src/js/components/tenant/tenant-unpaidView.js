import React from 'react';
import TenantStore from '../../stores/tenant-store';
import TenantUnpaidPerson from './tenant-unpaidPerson';
import TenantWatchMixin from '../../mixins/tenant-watchMixin'

const unpaidTenants = () => {
	return { tenants: TenantStore.getOwingTenants() }
}

const UnpaidView = ( props ) => {
	
	var total = 0.0;
	//This block maps the individual components for the people owing
	var mappedTenants = props.tenants.map( ( tenant ) => {
		total += tenant.rentCost;
		total += tenant.rentBehind;
		return (
			<TenantUnpaidPerson
				tenant={ tenant }
			/>
		)
	});

	return(
		<div>
			<h1> Behind on Rent </h1>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>This Rent</th>
						<th>Already Behind</th>
						<th></th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{ mappedTenants }
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="5" className="text-right">Total</td>
						<td>${ total }</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
} 
export default TenantWatchMixin( UnpaidView, unpaidTenants );