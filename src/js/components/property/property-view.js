import React from 'react';
import PropertyStore from '../../stores/property-store';
import PropertyStoreMixin from '../../mixins/property-watchMixin';


function getProperties(){
	return { properties: PropertyStore.getProperties() }
}

const PropertyView = ( props ) =>{
	
	// let tenants = props.tenants.map( tenant => {
	// 	return <TenantPerson key={ tenant.id } tenant={ tenant } />
	// });
	return (
		<div>
			TEST

		</div>
	);
}
export default PropertyStoreMixin( PropertyView, getProperties );
			// <h1> Your Tenants </h1>
			// <div className="row">
			// 	{ tenants }
			// </div>