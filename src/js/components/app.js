import React from 'react';
import UnpaidView from './tenant/tenant-unpaidView';
import TenantInfoView from './tenant/tenant-infoView';
import PropertyView from './property/property-view';
import WelcomeView from './welcome-view'
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';
import '../../css/app-css.css';


export default () => {

		return(
			<Router>
				<Route path="/" component={ Template }>
					<IndexRoute component={ WelcomeView } />
					<Route path="unpaid" component={ UnpaidView } />
					<Route path="tenant/:id" component={ TenantInfoView } />
					<Route path="properties/:id" component={ PropertyView } />
				</Route>
			</Router>
		);
}
