function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
    } = props;

    return <li className="collection-item">
        {name} x{quantity} = {price * quantity} руб.
        <span className="secondary-content">
            <span
                className="material-icons basket-delete"
                onClick={() => removeFromBasket(id)}
            >close</span>
        </span>
    </li>
}

export {BasketItem}
