import React from 'react';
import TenantStore from '../stores/tenant-store';
import TenantUnpaidPerson from './tenant-unpaidPerson';

const unpaidTenants = () => {
	return { tenants: TenantStore.getOwingTenants() }
}

class UnpaidView extends React.Component {
	
	constructor(){
		super();
		this.state = unpaidTenants();
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		TenantStore.addChangeListener( this._onChange )
	}
	componentWillUnmount(){
		TenantStore.removeChangeListener( this._onChange )
	}
	_onChange(){
		this.setState( unpaidTenants )
	}

	render(){
		var total = 0.0;
		//This block maps the individual components for the people owing
		var mappedTenants= this.state.tenants.map( ( tenant ) => {
			total += tenant.rentCost;
			total += tenant.rentBehind;
			return (
				<TenantUnpaidPerson
					tenant={ tenant }
				/>
			)
		});
		//Now render the results onto the screen		
		return(
			<div>
				<h1> Behind on Rent </h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Item</th>
							<th>Qty</th>
							<th></th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{ mappedTenants }
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Total</td>
							<td>${ total }</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	} 
}
export default UnpaidView;