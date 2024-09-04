import React, { useState } from 'react';
import Data from '../Data/Data';
import Products from '../Components/Products';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            Data.map((i) => (
                                <Products key={i.id} {...i} />
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
