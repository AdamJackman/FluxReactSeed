import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';
import TenantConstants from '../constants/tenant-constants';
import AppConstants from '../constants/app-constants';
import jQuery from 'jquery';

const CHANGE_EVENT = 'change'

var _tenants = [];

const _updateTenants = ( propId ) =>{
    if(propId){
        jQuery.get({
            url: AppConstants.BACKEND_URL + TenantConstants.URL_GET_PATH_FOR + propId,
            success: function(data) {
                console.log("successful tenant update: " + data);            
                if (JSON.stringify(_tenants) != JSON.stringify(data)){
                    _tenants = data;    
                    TenantStore.emitChange();
                }            
            },
            error: function(xhr, status, err) {
                console.log("Failure tenant update " + err);
            }
        });            
    }    
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
		//Populate _tenants with the JSON for all properties        
		return _tenants.map(tenant => {
			return Object.assign( {}, tenant, _owingTenants.find( owingTenant => owingTenant.id === tenant.id ) );
		});
	},

	getTenants( propertyId ){
		//Populate _tenants with the JSON for the specific property id
        _updateTenants( propertyId );
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