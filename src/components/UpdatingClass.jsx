import { Component } from "react"
import { PropTypes } from 'prop-types';

export class UpdatingClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Check if the 'count' prop has changed
        if (nextState.count === this.state.count) {
            return true; // Re-render the component
        }
        // If 'count' hasn't changed, don't re-render
        return false;
    }

    componentDidUpdate(){
        alert('componentDidUpdate');
    }

    render() {
        return (<>
            <h2>Updating Class</h2>
            <h3>Nilai Count : {this.state.count}</h3>
            <h3>Nilai Count 2 : {this.state.count2}</h3>
            <button style={{margin: '5px'}} onClick={() => this.setState({count: this.state.count + 1})}>Update Count</button>
            <button style={{margin: '5px'}} onClick={() => this.setState({count2: this.state.count2 + 1})}>Update Count 2</button>
        </>)
    }
}

UpdatingClass.propTypes = {
    count: PropTypes.number.isRequired
}