import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
    return (
        <button className="header-cart-button" onClick={props.onClick}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">
                
            </span>
        </button>
    );
};

export default HeaderCartButton;