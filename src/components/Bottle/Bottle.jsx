import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} =bottle;
    return (
        <div className="bottle-container">
            <h5>Bottle: {name}</h5>
            <img src={img} alt="bottle" />
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
         
        </div>
    );
};

export default Bottle;