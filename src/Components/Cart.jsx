import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../Store/Slices/CartSlices';


const Cart = () => {

    const { cartOpen, cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };


    const cartQuantity = cartItems.length;

    const Total = cartItems.map((item) => item.price * item.quantity)
    const cartTotal = Total.reduce((prevamount, curramount) => prevamount + curramount, 0);


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const htmlBody = document.body;
        cartOpen ? htmlBody.classList.add("overflow_hide") : htmlBody.classList.remove("overflow_hide");
    }, [cartOpen]);

    return (
        <>
            {cartOpen && (
                <div id="cart">
                    <div className="cart_content">
                        <div className="cart_head">
                            <h2>Cart <small>({cartQuantity})</small></h2>
                            <div
                                title="Close"
                                className="close_btn"
                                onClick={() => handleCloseCart(false)}
                            >
                                <span>&times;</span>
                            </div>
                        </div>

                        <div className="cart_body">
                            {cartQuantity === 0 ? (
                                <center>
                                    <h2>Cart is empty</h2>
                                </center>
                            )
                                :
                                (
                                    cartItems.map((item) => {
                                        const { id, img, title, price, quantity } = item;
                                        const itemTotal = price * quantity;

                                        return (
                                            <div className="container" key={id}>
                                                <div className="cart_items">
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">
                                                            ₹ {itemTotal.toLocaleString()}
                                                        </h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span
                                                            onClick={() => handleDecrement(id)}
                                                        >&#8722;</span>
                                                        <b className='bg-blue'>{quantity}</b>
                                                        <span
                                                            onClick={() => handleIncrement(id)}
                                                        >&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemove(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                        </div>

                        <div className="cart_foot">
                            <h3>
                                <small>Total:</small>
                                <b>₹ {cartTotal.toLocaleString()}</b>
                            </h3>

                            <button
                                type="button"
                                className="checkout_btn"
                                disabled={cartQuantity === 0}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart
