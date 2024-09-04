import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../Store/Slices/CartSlices';
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const cartQuantity = cartItems.length;

    const dispatch = useDispatch();
    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    return (
        <>
            <header className="header">
                <div className="logo">UK Shotter</div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="cart" title="Cart"
                    onClick={() => handleOpenCart(true)}
                >
                    <a>
                        <FaShoppingCart style={{ fontSize: '155%' }} />
                        <span className="cart-count" style={{ fontSize: '90%' }}>
                            {cartQuantity}
                        </span>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header
