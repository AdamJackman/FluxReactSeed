import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';
import PropertyConstants from '../constants/property-constants';
import AppConstants from '../constants/app-constants';
import jQuery from 'jquery';

var _properties = [];

const CHANGE_EVENT = 'change'

const _updateProperties = () =>{
    jQuery.get({
        url: AppConstants.BACKEND_URL + PropertyConstants.URL_GET_PATH,
        success: function(data) {
            console.log("successful properties update: " + data);            
            if (JSON.stringify(_properties) != JSON.stringify(data)){
                _properties = data;    
                PropertyStore.emitChange();
            }            
        },
        error: function(xhr, status, err) {
            console.log("Failure properties update " + err);
        }
    });        
}

const _findProperty = ( property ) => {
	return _properties.find( t => t.id === property.id );
};

const _addProperty = ( property ) => {
	const found = _findProperty( property );
	if( !found ) {
		_properties.push( property );
	}
}
const _removeProperty = ( property ) => {	
	_properties.splice( _properties.findIndex( i => i === property), 1); 
}
const _addTenantToProperty = ( tenant, property ) => {
	return true;
}
const _removeTenantFromProperty = ( tenant, property ) => {
	return true;
}


const PropertyStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit( CHANGE_EVENT );
	},

	addChangeListener( callback ){
		this.on( CHANGE_EVENT, callback );
	},

	removeChangeListener( callback ){
		this.removeListener( CHANGE_EVENT, callback );
	},
    
	getProperties(){
        _updateProperties();
        return _properties.map(property => {
            return Object.assign( {}, property );
        });        
	},

	dispatcherIndex: register ( function( action ){       
		switch(action.actionType){
			case PropertyConstants.ADD_PROPERTY:
				_addProperty( action.property );
				break;
			case PropertyConstants.REMOVE_PROPERTY:
				_removeProperty( action.property );
				break;
			case PropertyConstants.ADD_TENANT_TO_PROPERTY:
				_addTenantToProperty( action.tenant, action.property );
				break;
			case PropertyConstants.REMOVE_TENANT_FROM_PROPERTY:
				_removeTenantFromProperty( action.tenant, action.property );
				break;
		}
		PropertyStore.emitChange();
	})
});
export default PropertyStore;