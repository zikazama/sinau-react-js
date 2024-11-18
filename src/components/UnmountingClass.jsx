import { Component } from "react";
import Swal from "sweetalert2";

export class UnmountingClass extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });        
    }

    render() {
        return <div>UnmountingClass</div>
    }
}