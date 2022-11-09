const Placeholder = (props) => {
    const placeholderClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li className="productsList__item">
            <button onClick={placeholderClicked} className="productsList__button">{props.buttonSymbol || "*"}</button>
            <p className="productsList__text">{props.buttonText || "lorem ipsum"}</p>
        </li>
    )
}

export default Placeholder;