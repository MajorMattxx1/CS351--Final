import React from "react";
import ReactDOM from 'react-dom';


class Order extends React.Component {
  constructor(props) {
    super(props);
      this.state = { item: "", quantity: "" };
      
      this.selectHandler = this.selectHandler.bind(this);
      this.inputHandler = this.inputHandler.bind(this);
      this.buttonHandler = this.buttonHandler.bind(this);
  }
    
    selectHandler(event) {
        this.setState({ item: event.target.value });
  }
    
    inputHandler(event) {
        this.setState({ quantity: event.target.value });
  }
    
    buttonHandler(event) {
        console.log(this.state);
        
        let act = { item: this.state.item, quantity: this.state.quantity };
        this.props.addOrder(act);
  }

    render() {
    return (

        <div>
        <h2>Order Form</h2>
        <div id="OrderForm">
            <label>Item</label>
            <select
            value={this.state.item}
            onChange={this.selectHandler}
            
            >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Rust">Rust</option>
                <option value="Go">Go</option>
            </select>
            <label>Quantity</label>
            <input type="text"
                    value={this.state.quantity}
                    onChange={this.inputHandler}
                    
                    ></input>
            <button onClick={this.buttonHandler}>Send Order</button>
        </div>
        </div>
 
         );
    }
    
}


export default Order;
