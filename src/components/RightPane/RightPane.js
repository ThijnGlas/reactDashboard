import './RightPane.css';

const RightPane = ({ headerText, buttonSymbol, buttonText, productCards, onButtonClicked }) => {
    let addProduct = () => {
        onButtonClicked();
    }
    
    let productCardsToBeRendered = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <li className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "lorem ipsum"}</p>
                </li>
            )
        }
        return (
            <li className="productsList__item">
                <img className="productsList__img" src={product.img} alt={product.name} />
                <div className="productsList__fade">
                <p className="productsList__imageText">{product.name}</p>
                </div>
            </li>
        );

    });

    return (
        <section className='productsWrapper'>
            <header className='header'>
                <h1 className='header__h1'>{headerText || "placeholder"}</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default RightPane;