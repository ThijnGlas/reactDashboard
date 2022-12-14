const productCard = (props) => {

    const productCardClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li onClick={productCardClicked} id={props.productid} className="productsList__item productsList__item--gray">
            <img className="productsList__img" src={props.productImg} alt={props.name} />
            <div className="productsList__fade">
                <p className="productsList__imageText">{props.name}</p>
            </div>
        </li>
    );
}

export default productCard;