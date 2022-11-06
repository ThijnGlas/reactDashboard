import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
import Popup from "../Popup/Popup"
import flowersImage from "../../img/flowers.jpg";
import watchImage from "../../img/watch.jpg";
import skyImage from "../../img/sky.jpg"
import mountainImage from "../../img/mountain.jpg"
import './Dashboard.css';
import { render } from '@testing-library/react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { productCards: [], open: true };
    }

    componentDidMount() {
        let productCards = [
            {
                name: "placeholder"
            },
            {
                name: "flowers",
                img: flowersImage
            },
            {
                name: "watch",
                img: watchImage
            },


        ];
        this.setState({ productCards: productCards })
    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImage;
        switch(inputFromPopup){
            case("watch"):
                toBeAddedImage = watchImage;
                break;
                case("flowers"):
                toBeAddedImage = flowersImage;
                break;
                case("sky"):
                toBeAddedImage = skyImage;
                break;
                case("mountain"):
                toBeAddedImage = mountainImage;
                break;
        }
        let toBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImage,
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    render() {
        let navigationListItems =
            [
                {
                    name: "Home",
                    message: 0,
                },
                {
                    name: "facturen",
                    message: 2,
                },
                {
                    name: "Bestellingen",
                    message: 1,
                },
                {
                    name: "Retour",
                    message: 0,
                },
                {
                    name: "contact",
                    message: 2,
                },
            ];

        if (this.state.open === true) {
            return (
                <article className='dashboard'>
                    <LeftPane navigationListItems={navigationListItems} buttonText="Go Premium" />
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
