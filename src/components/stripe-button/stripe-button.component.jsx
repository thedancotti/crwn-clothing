import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IqMGIDS7C80kxjISfZ5N35yiS8IgO3mpRpsvwDK3rGUz6rlnsXGS2rpaGdSeO4fqwuEyU17EHFjLwzByXUOH8hv00NyLSUqnB";

    const onToken = token => alert('Payment successful!', console.log(token));

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeButton;