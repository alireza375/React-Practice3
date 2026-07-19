import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localstorase";

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
            console.log(storeCart);
        }

    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Available Bottles: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
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