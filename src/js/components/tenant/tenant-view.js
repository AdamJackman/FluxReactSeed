import React from 'react';
import TenantStore from '../../stores/tenant-store';
import TenantPerson from './tenant-person';
import TenantStoreMixin from '../../mixins/tenant-watchMixin';

function getTenants( props ){	
	console.log( 'Grabbing tenants ' + props );
	return { tenants: TenantStore.getTenants( props.propertyId ) }
}

const TenantView = ( props ) =>{
	
	let tenants = props.tenants.map( tenant => {
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
export default TenantStoreMixin(TenantView, getTenants);