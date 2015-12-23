import TenantConstants from '../constants/tenant-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
	addTenant( tenant ){
		dispatch({
			actionType: TenantConstants.ADD_TENANT, tenant
		})
	},
	removeTenant( tenant ){
		dispatch({
			actionType: TenantConstants.REMOVE_TENANT, tenant
		})
	},
	paidTenant( tenant ){
		dispatch({
			actionType: TenantConstants.TENANT_PAID, tenant
		})
	},
	notPaidTenant( tenant ){
		dispatch({
			actionType: TenantConstants.TENANT_NOT_PAID, tenant
		})
	}
}