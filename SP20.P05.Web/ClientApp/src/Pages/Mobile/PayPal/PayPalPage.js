import React, {Component} from "react";
import PayPal from '../../../Components/Paypal/PayPal';
import queryString from 'query-string'


class PayPalPage extends Component {
    constructor(props) {
        super(props)
    }



    componentDidMount(){
        const {price} = this.props.match.params;
        //const {ticketInfo} = this.props.match.params;

        const values = queryString.parse(this.props.location.search)
        
        console.log(price) // "top"
        console.log(values.ticketInfo) // "im"
        console.log(values)
        console.log(this.props.match.params.price)

        console.log('component mounted')

        //console.log(price)
        //console.log(ticketInfo)
    }

    render() {

        localStorage.setItem('isPaidFor', '');

            return (
                <div>
                    <PayPal price={this.props.match.params.price} description='Farm field ticket purchase from mobile app.' />
                </div>
            );

    }
}

export default PayPalPage
