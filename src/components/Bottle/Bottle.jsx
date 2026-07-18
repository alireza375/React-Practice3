import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, img, price} =bottle;
    return (
        <div className="bottle-container">
            <h5>Bottle: {name}</h5>
            <img src={img} alt="bottle" />
            <p>Price: {price}</p>
         
        </div>
    );
};

export default Bottle;