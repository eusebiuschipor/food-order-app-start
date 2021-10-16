import MealItemForm from './MealItemForm';

const MealItem = props => {
    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description"></div>
                <div className="price"></div>
            </div>
            <div>
            </div>
        </li>
    );
};

export default MealItem;