import React, {Component} from 'react';

class ErrorBoundry extends Component {
	constructor(props){
		// this function sets the state of error to be null before execution
		super(props);
		this.state = {
			hasError: false
		}
    }
    // this function checks if any error has been encountered
	componentDidCatch(error, info){
		this.setState({ hasError: true})
	

	}
	render(){
		// if any error was encountered, this will display the text below to the final users
		if(this.state.hasError){
			return <h1>Oops, an unexpected error occurred</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;