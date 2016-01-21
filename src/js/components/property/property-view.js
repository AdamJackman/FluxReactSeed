import React from 'react';
import PropertyStore from '../../stores/property-store';
import PropertyStoreMixin from '../../mixins/property-watchMixin';
import PropertyNav from './property-nav';
import TenantView from '../tenant/tenant-view';

function getProperties( props ){
	console.log( props.routeParams.id )
	return { properties: PropertyStore.getProperties() }	
}

const PropertyView = ( props ) =>{
	
	// let tenants = props.tenants.map( tenant => {
	// 	return <TenantPerson key={ tenant.id } tenant={ tenant } />
	// });
	return (
		<div>
			<div> TODO: HEADER </div>
			<TenantView propertyId={ props.routeParams.id } />
		</div>
	);
}
export default PropertyStoreMixin( PropertyView, getProperties );
			// <h1> Your Tenants </h1>
			// <div className="row">
			// 	{ tenants }
			// </div>