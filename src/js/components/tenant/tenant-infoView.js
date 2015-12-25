import React from 'react';
import TenantStore from '../../stores/tenant-store';
import TenantWatchMixin from '../../mixins/tenant-watchMixin';
import TenantActions from '../../actions/tenant-actions';
import TenantButton from './tenant-button';
import { Link } from 'react-router';

function getTenantInfo( props ){
	 let tenant = TenantStore.getTenants().find( ({ id }) => id === props.params.id );
	 console.log(tenant);
	 return { tenant };
} 

const TenantInfo = ( props ) => {
	return (

		<div className="col s12" style={{marginTop:'10px'}}>
			
			<img className="img-responsive" src="http://placehold.it/250x250" />
			<p className={ TenantStore.isTenantOwing( props.tenant) ? "text-danger" : "text-success"}> {TenantStore.isTenantOwing( props.tenant) ? "Overdue" : "Paid"}</p>

			<p>TODO: DISPLAY FULL information</p>
			<p>ALLOW EDIT</p>
			<p>ALLOW REMOVE</p>
			check console for an object dump

			<div className="text-center">
				<div className="btn-group">
					<TenantButton
						handler={
							TenantActions.paidTenant.bind(null, props.tenant)
						}
						txt="Paid"
					/>
					<TenantButton
						handler={
							TenantActions.notPaidTenant.bind(null, props.tenant)
						}
						txt="Owing"
					/>
				</div>
			</div>			

			<Link to="/" className="btn">Back</Link>

		</div>
	);
}
export default TenantWatchMixin( TenantInfo, getTenantInfo )