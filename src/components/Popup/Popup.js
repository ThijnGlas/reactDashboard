import React from 'react';
import './Popup.css';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" }
    }

    componentDidMount() {
        this.setState({ input: this.props.cardClicked.name })
    }

    input = (event) => {
        this.setState({ input: event.target.value })
    }

    addProducts = () => {
        if (this.state.input !== "") {
            this.props.addButtonClicked(this.state.input)
        }
    }

    editProducts = () => {
        console.log("edit")
    }


    render() {
        let button = <button onClick={this.addProducts} className="popup__button">voeg toe</button>
        if (this.props.editMode === true) {
            button = <button onClick={this.editProducts} className="popup__button">pas aan</button>
        }
        return (
            <article className="popup">
                <div className='popup__wrapper'>
                    <label htmlFor="name" className="Popup__label">Naam</label>
                    <input onChange={this.input} value={this.state.input} type="text" className="popup__input" id='name' />
                </div>
                {button}
            </article>
        )
    }
}

export default Popup;