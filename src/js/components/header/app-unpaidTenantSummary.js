import React from 'react';
import TenantStore from '../../stores/tenant-store';
import TenantWatchMixin from  '../../mixins/tenant-watchMixin';
import { Link } from 'react-router';

var summaryMargin = {
	marginRight: '5%'
}

const unpaidTenants = () => {
	return { tenants: TenantStore.getOwingTenants() }
}

const UnpaidTenantSummary = ( props ) => {
	return (
		<div className="pull-right" style={summaryMargin}>
			<Link to="/unpaid" className={ props.tenants.length>0 ? "waves-effect waves-light btn red darken-2" : "waves-effect waves-light btn green darken-2"}>
				{ props.tenants.length>0 ? "Overdue Tenants" : "No Overdue Tenants" }
			</Link>
		</div>
	);
}
export default TenantWatchMixin( UnpaidTenantSummary, unpaidTenants );

