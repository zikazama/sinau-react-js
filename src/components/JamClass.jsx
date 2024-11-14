import { PropTypes } from 'prop-types';
import { Component } from 'react';
import moment from 'moment';
import currency from 'currency.js';

const ConvertRupiah = value => currency(value, { separator: '.', decimal: ",", symbol: "Rp", precision: 0 });

class JamClass extends Component {

    constructor(props) {

        super(props);

        this.state = { count: 0 };

    }

    // static getDerivedStateFromProps(props, state) {
    //     return { count: 10 };
    // }

    incrementCount = () => {
        // this.setState({ count: this.state.count + 1 });
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ count: 100 })
        }, 3000)
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({ count: 500 })
        }, 3000)
      }

    //   componentWillUnmount() {
    //     alert("The component named Header is about to be unmounted.");
    //   }

    render() {

        return (
            <>
                <h1>Hello, sekarang pukul {moment().format('HH:mm')}</h1>
                <h2>Aku punya uang {ConvertRupiah(2000000000).format()}</h2>
                <h3>Ini adalah nilai props {this.props.warna}</h3>
                <h3>Angka {this.state.count}</h3>
                <button onClick={this.incrementCount}>Tambah</button>
            </>
        );
    }
};

JamClass.propTypes = {
    warna: PropTypes.string.isRequired
}

export default JamClass;