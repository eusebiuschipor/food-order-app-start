import Modal from './Modal';
import CartContext from '../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = props => {
    const context = useContext(CartContext);

    const addCartItem = (item) => {
        //item.amount = 1;
        context.addItem({...item, amount: 1});
        //context.addItem(item);
    }

    const removeCartItem = (id) => {
        context.removeItem(id);
    }
    

    return (
        <Modal onClose={props.onClose}>
            {context.items.map(item => (
                <CartItem key={item.id} price={item.price} name={item.name} amount={item.amount} onAdd={() => addCartItem(item)} onRemove={() => removeCartItem(item.id)}/>
            ))}
            
            <div className="total">
                <span>Total Amount</span>
            </div>
            <div className="action">
                <button className="button-alt">Close</button>
            </div>
        </Modal>
    );
};

export default Cart;