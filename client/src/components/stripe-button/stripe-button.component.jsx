import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // <= a requirement
  const publishKey = "pk_test_mEg92ZOSMkVhnVkJ6JTHDtob00VB9b0mpP";
  const onToken = token => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("payment successful!");
      })
      .catch(err => {
        console.log("payment failed,", err);
        alert("use the correct credit card");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
