import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert bg">
                {cartItems.length === 0 ? (
                    "Basket is empty"
                ) : (
                        <div style={{ textAlign: "center", fontWeight: "bolder" }}>
                            You have {cartItems.length} items in the basket. <hr />
                        </div>
                    )}
                {cartItems.length > 0 && (
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <b>{item.title} <br /> Price: {item.price} </b>  <br />
                                    Quantity: {item.count} <br /> Item Price: {item.price * item.count}
                                    <button
                                        style={{ float: "right" }}
                                        className="btn1 btn-danger btn-xs"
                                        onClick={(e) =>
                                            this.props.removeFromCart(this.props.cartItems, item)
                                        }>X
                                    </button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>
                            ))}
                        </ul>

                        <b style={{ fontSize: "x-large", fontWeight: "bolder", textAlign: "center" }}>
                            Sum:{" "}
                            {util.formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </b>
                        <button
                            onClick={() => alert("Todo: Implement checkout page.")}
                            className="btn1 btn-primary">
                            CheckOut
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
