import MealItemForm from './MealItemForm';
import CartContext from '../store/cart-context';
import { useContext } from 'react';

const MealItem = props => {
    const cartContext = useContext(CartContext);

    const addToCart = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            amount: amount
            
        })
    }
    
    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{props.price}</div>
            </div>
            <div>
               <MealItemForm onAddToCart={addToCart} /> 
            </div>
        </li>
    );
};

export default MealItem;