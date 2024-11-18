import { Component } from "react"

export class MountingClass extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('componentDidMount')
        alert('componentDidMount');
    }

    render() {
        return <div>MountingClass</div>
    }
}