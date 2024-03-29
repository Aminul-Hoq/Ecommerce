import React, {useState, useEffect} from 'react';
import {commerce} from "./lib/commerce";
import {Products, Navbar} from './components';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () =>{
        const {data}= await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () =>{
        const cart= await commerce.cart.retrieve();
        setCart(cart);
    }


    const handleAddToCart = async (productId) => {
            const item = await commerce.cart.add(productId, 1);
            setCart(item.cart);
    };


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

        console.log(cart);





    return (
        <div>
            <Navbar totalItems={cart.total}>{cart}</Navbar>

            <Products products={products} onAddtoCart={handleAddToCart} />

        </div>
    )
}

export default App