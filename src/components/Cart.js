import Modal from './Modal';

const Cart = props => {
    return (
        <Modal onClose={props.onClose}>
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