function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    return <li className="collection-item">
        {name} x{quantity} = {price}
        <span className="secondary-content">
            <span className="material-icons basket-delete">close</span>
        </span>
    </li>
}

export {BasketItem}
