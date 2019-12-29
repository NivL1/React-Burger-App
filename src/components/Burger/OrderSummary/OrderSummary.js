import React, {Component} from "react";
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// could be a functional component
class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] DidUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
            if(this.props.ingredients[igKey] !== 0) {
                return (

                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}> {igKey}: {this.props.ingredients[igKey]}</span>
                    </li>)
            }
            return null;
        } )

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your Yummy Burger Ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>

            </Aux>
        );
    }
};

export default OrderSummary;