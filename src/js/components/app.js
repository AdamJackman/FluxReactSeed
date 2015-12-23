import React from 'react';
import TenantActions from '../actions/tenant-actions';
import TenantView from './tenant-view';
import UnpaidView from './tenant-unpaidView'

export default class App extends React.Component {
	render(){
		return (
			<div className="container">
				<TenantView />
				<UnpaidView />
			</div>
		);
	}
}
