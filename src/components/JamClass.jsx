import { Component } from 'react';
import moment from 'moment';
import currency from 'currency.js';

const ConvertRupiah = value => currency(value, { separator: '.', decimal: ",", symbol: "Rp", precision: 0 });

class JamClass extends Component {

    constructor(props) {

        super(props);

        this.state = { count: 0 };

    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

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

export default JamClass;