import React, { Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addItemToCart(this.state.item)
    }

    remove=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        return(
            <div>
                <h3>{this.state.item.name}</h3>
                <p className="btn">₹{this.state.item.price}</p>
                {
                    (this.state.isCart)?
                    (<button className="btn btn-dashed1" onClick={this.remove}><span>&#8722;</span></button>):
                    (<button className="btn btn-dashed" onClick={this.add}><span>&#43;</span></button>)
                }
            </div>
        )
    }
}

export default Item;