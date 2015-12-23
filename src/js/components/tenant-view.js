import React from 'react';
import TenantStore from '../stores/tenant-store';
import TenantPerson from './tenant-person';

function getTenants(){
	return { tenants: TenantStore.getTenants() }
}

class TenantView extends React.Component {
	constructor(){
		super();
		this.state = getTenants();
	}

	render(){
		let tenants = this.state.tenants.map( tenant => {
			return <TenantPerson key={ tenant.id } tenant={ tenant } />
		});
		return (
			<div>
				<h1> Your Tenants </h1>
				<div className="row">
					{ tenants }
				</div>
			</div>
		);
	}
}
export default TenantView;