import React, { Component } from 'react'

class Checkout extends Component{
    constructor(props){
        super(props);

        this.state={
            orderTotal:props.orderTotal
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            orderTotal:newProps.orderTotal
        })
    }

    render(){
        return(
            <div>
                <h1>CHECKOUT</h1>
                <p>Total: {this.state.orderTotal}</p>

                <button>Proceed to pay</button>
            </div>
        )
    }
}

export default Checkout;