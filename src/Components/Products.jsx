import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/Slices/CartSlices';

const Products = (props) => {

    const { img, rating, title, price } = props;

    const [Add, setAdd] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = () => {

        const i = { ...props };
        dispatch(addItem(i));

        setAdd(true);

        setTimeout(() => {
            setAdd(false);
        }, 2000);

    }

    return (
        <div>
            <>
                <div className="product_card">
                    <figure>
                        <img src={img} alt="item-img" />
                    </figure>
                    <strong className="rating">{rating}</strong>
                    <h4 className="title">{title}</h4>
                    <h3 className="price">₹ {price}</h3>
                    <button
                        type="button"
                        className="btn"
                        onClick={handleAddToCart}
                    >
                        {Add ? 'Added' : 'Add to cart'}
                    </button>
                </div>
            </>
        </div>
    )
}

export default Products
