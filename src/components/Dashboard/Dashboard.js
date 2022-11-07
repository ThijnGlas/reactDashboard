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
        this.state = { productCards: [], open: true };
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

    render() {
        if (this.state.open === true) {
            return (
                <article className='dashboard'>
                    <LeftPane navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium" />
                    <RightPane onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="mijn producten" buttonSymbol="+" buttonText="voeg een product toe" />
                </article>
            )
        }
        return (
            <Popup addButtonClicked={this.addButtonClicked} />
        )


    }
}


export default Dashboard;
