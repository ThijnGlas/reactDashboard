import React from 'react';
// own components
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
import Popup from "../Popup/Popup"
// helpers
import chooseImage from '../../helpers/chooseImage';
import navigationItemsObject from '../../data/navigationItems';
// import data from data source
import products from '../../data/products';
// styling / css
import './Dashboard.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCards: [],
            open: true,
            CardClicked: {},
            editMode: false,
        };
    }

    componentDidMount() {
        this.setState({ productCards: products.products })
    }

    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }

    addButtonClicked = (inputFromPopup) => {
        let imagefromhelper = chooseImage(inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imagefromhelper,
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    editButtonClicked = (inputFromPopup) => {
        let productCards = this.state.productCards;
        let newState = productCards.map(product => {
            if(this.state.CardClicked.id === product.id){
                product.name = inputFromPopup;
                return product;
            }
            else{
                return product;
            }
        });
        this.setState({ productCard: newState, open: true});
    }

    onCardClicked = (idFromCard) => {
        if (this.state.productCards[idFromCard - 1].name === "placeholder") {
            this.setState({
                editMode: false,
                open: !this.state.open,
                CardClicked: this.state.productCards[idFromCard - 1],
            });
            return;
        }
        this.setState({
            editMode: true,
            open: !this.state.open,
            CardClicked:this.state.productCards[idFromCard - 1]
        })

    }

    render() {
        if (this.state.open === true) {
            return (
                <article className='dashboard'>
                    <LeftPane navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium" />
                    <RightPane onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
                </article>
            )
        }
        return (
            <Popup editButtonClicked={this.editButtonClicked} editMode={this.state.editMode} cardClicked={this.state.CardClicked} addButtonClicked={this.addButtonClicked} />
        )


    }
}


export default Dashboard;
