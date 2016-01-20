import React from 'react';
import PropertyStore from '../../stores/property-store';
import PropertyStoreMixin from '../../mixins/property-watchMixin';
import PropertyNavTab from './property-navTab';
import PropertyButton from './property-button';

function getProperties(){
	return { properties: PropertyStore.getProperties() }	
}

const PropertyNav = ( props ) =>{
	
	let propertiesList = props.properties.map( property => {
	 	return <PropertyNavTab key={ property.id } property={ property } />
	});

	return (
		
	<div>        
        <div id="sidebar-wrapper" className="grey lighten-4">
            <ul className="sidebar-nav collection">
                <li>
                    <a>Properties</a>
                </li>
                { propertiesList }

                <PropertyButton txt="Add Property"/>				
            </ul>
        </div>
    </div>   

	);
}
export default PropertyStoreMixin( PropertyNav, getProperties );