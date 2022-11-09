import './RightPane.css';
import ProductCard from '../ProductCard/ProductCard';
import Placeholder from '../Placeholder/Placeholder';

const RightPane = ({ headerText, buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {
    let onCardClicked = (idFromCard) => {
        onProductCardClicked(idFromCard);
    }
    
    let productCardsToBeRendered = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <Placeholder onCardClicked={onCardClicked} buttonSymbol="+" buttonText="Voeg product toe" id={product.id}  />
            );
        }
        return (
            <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img} />
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