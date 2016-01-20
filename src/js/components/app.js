import React from 'react';
import TenantView from './tenant/tenant-view';
import UnpaidView from './tenant/tenant-unpaidView';
import TenantInfoView from './tenant/tenant-infoView';
import PropertyView from './property/property-view';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';
import '../../css/app-css.css';


export default () => {

		return(
			<Router>
				<Route path="/" component={ Template }>
					<IndexRoute component={ TenantView } />
					<Route path="unpaid" component={ UnpaidView } />
					<Route path="tenant/:id" component={ TenantInfoView } />
					<Route path="properties" component={ PropertyView } />
				</Route>
			</Router>
		);
}
