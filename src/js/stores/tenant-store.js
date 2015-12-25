import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';
import TenantConstants from '../constants/tenant-constants';

const CHANGE_EVENT = 'change'

var _tenants = [];

//CREATE DUMMY DATA -- THIS SHOULD BE FROM THE DATABASE
for ( let i=0; i<4; i++){
	_tenants.push( { 
		'id': ''+i,
		'firstName':'First'+i,
		'lastName':'Last',
		'contactNumber':'902-789-8447',
		'contactEmail':'FirstLast@gmail.com',
		'rentPaid': 'YES',
		'rentBehind': 0,
		'rentCost': 500.00	
	} );
}

const _findTenant = ( tenant ) => {
	return _tenants.find( t => t.id === tenant.id );
};

const _removeTenant = ( tenant ) => {
	_tenants.splice( _tenants.findIndex( i => i === tenant), 1); 
};

const _addTenant = ( tenant ) => {
	const found = _findTenant( tenant );
	if( !found ) {
		//_tenants.push( Object.assign( tenant ) );
		_tenants.push( tenant );
	}
};


var _owingTenants = [];
_owingTenants.push( { 
		'id': '11',
		'firstName':'Adam',
		'lastName':'Jackman',
		'contactNumber':'902-789-8447',
		'contactEmail':'ajackman@gmail.com',
		'rentPaid': 'YES',
		'rentBehind': 500.00,
		'rentCost': 500.00	
});

const _findOwingTenant = ( tenant ) => {
	return _owingTenants.find( owingTenant => owingTenant.id === tenant.id );
};

const _removeOwingTenant = ( tenant ) => {
	const found = _findOwingTenant( tenant );
	if( found ) {
		_owingTenants.splice( _owingTenants.findIndex( i => i === tenant), 1); 
	}
};

const _addOwingTenant = ( tenant ) => {
	const found = _findOwingTenant( tenant );
	if( !found ) {
		//_owingTenants.push( Object.assign( tenant ) );
		_owingTenants.push( tenant );
	}
};

const _isEmptyOwingTenants = () => {
		return (_owingTenants.length > 0);
}


const TenantStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit( CHANGE_EVENT );
	},

	addChangeListener( callback ){
		this.on( CHANGE_EVENT, callback );
	},

	removeChangeListener( callback ){
		this.removeListener( CHANGE_EVENT, callback );
	},

	getTenants(){
		return _tenants.map(tenant => {
			return Object.assign( {}, tenant, _owingTenants.find( owingTenant => owingTenant.id === tenant.id ) );
		});
	},

	getOwingTenants(){
		return _owingTenants;
	},

	isTenantOwing( tenant ){
		return _findOwingTenant( tenant );
	},

	getTenantInfo( tenant ){
		return _findTenant( tenant );
	},

	hasOwingTenant(){
		return _isEmptyOwingTenants();
	},	

	dispatcherIndex: register ( function( action ){
		switch(action.actionType){
			case TenantConstants.ADD_TENANT:
				_addTenant( action.tenant );
				break;
			case TenantConstants.REMOVE_TENANT:
				_removeTenant( action.tenant );
				break;
			case TenantConstants.TENANT_PAID:
				_removeOwingTenant( action.tenant );
				break;
			case TenantConstants.TENANT_NOT_PAID:
				_addOwingTenant( action.tenant );
				break;
		}
		TenantStore.emitChange();
	})
});
export default TenantStore;
/*

var _properties = [];

//CREATE DUMMY DATA -- THIS SHOULD BE FROM THE DATABASE
for( let i=0; i<2; i++){
	_properties.push( {
		'name':'testProperty',
		'description':'Lorem Ipsum',
		'streetAddress':'7 Lucky Street',		
		'city':'Black Cat',
		'rentCost':'$500.00'
		'tenants': ''		
	} );
}

const _addTenant = ( tenant ) => {

}

const _removeTenant = ( tenant ) => {

}

*/