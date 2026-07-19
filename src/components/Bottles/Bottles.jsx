import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorase";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if(bottles.length>0) {
            const storeCart = getStoredCart();
            console.log(storeCart, bottles);
            const savedCart = [];
            for(const id of storeCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                
                if(bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart);
        }

    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // visiual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

        // remove from LS
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Available Bottles: {bottles.length}</h2>
            <Cart handleRemoveFromCart={handleRemoveFromCart} 
            cart={cart} />
           <div className="bottles-contailer">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle} 
                    handleAddToCart = {handleAddToCart}
                /> )
            }
           </div>
        </div>
    );
};

export default Bottles;