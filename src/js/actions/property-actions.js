import PropertyConstants from '../constants/property-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
	addProperty( property ){
		dispatch({
			actionType: PropertyConstants.ADD_PROPERTY, property
		})
	},
	removeProperty( property ){
		dispatch({
			actionType: PropertyConstants.REMOVE_PROPERTY, property
		})
	},
	addTenantToProperty( tenant, property ){
		dispatch({
			actionType: PropertyConstants.ADD_TENANT_TO_PROPERTY, tenant, property
		})
	},
	removeTenantFromProperty( tenant, property ){
		dispatch({
			actionType: PropertyConstants.REMOVE_TENANT_FROM_PROPERTY, tenant, property
		})
	}
}