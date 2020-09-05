import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

// import image1 from '../Json/products/img1_1.jpg'
// import products from '../Json/products'

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products.map((product) => (
            <div className="col-md-4" key={product.id}>
                <div className="bg text-center">
                    <a
                        href={`#${product.id}`}
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                    >
                        {/* <img src={`${product.imageUrl}`} alt={product.title} /> */}
                        {/* <img src={`$product.url`} alt={product.title} /> */}
                        {/* <img src={`${product.sku}_2jpg`} alt={product.title} /> */}
                        {/* <img src='../Json/products/img1_1.jpg' alt={'img1'} /> */}
                        {/* <img className="col-md-3" src={`${image1}`} alt={'img1'} /> */}
                        {/* <img src={`../ Json / products / ${product.sku} _2.{product.title} /> */}

                        {/* <img src="/products/img1_1.jpg" alt={product.title} /> */}
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />

                        <p style={{ color: "black" }}>{product.title}</p>
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button
                        className="btn1 btn-primary"
                        // onClick={(e) => this.props.handleAddToCart(e, product)}
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}

                    >
                        Add to cart
          </button>
                </div>
            </div>
        ));

        return <div className="row">{productItems}
        </div>;

    }
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
