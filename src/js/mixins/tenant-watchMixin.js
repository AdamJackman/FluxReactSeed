import React from 'react';
import TenantStore from '../stores/tenant-store';

export default ( InnerComponent, stateCallback ) => class extends React.Component {
	
	constructor(props){
		super(props);
		this.state = stateCallback( props );
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		TenantStore.addChangeListener( this._onChange )
	}
	componentWillUnmount(){
		TenantStore.removeChangeListener( this._onChange )
	}
	_onChange(){
		this.setState( stateCallback( this.props ) )
	}

	render(){
		return <InnerComponent {...this.state}{...this.props} />
	}

}