import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';
import PropertyConstants from '../constants/property-constants';

const CHANGE_EVENT = 'change'

const _addProperty = ( property ) => {
	return true;
}
const _removeProperty = ( property ) => {
	return true;
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
		return "test";
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