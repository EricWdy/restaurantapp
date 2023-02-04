/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  // const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  const buttonDisplay = false;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51MVwptA9fqGt17OiMDNl5pUAaVHAKeqFg3r56PAjhBO0C8wGS1my6PuOmzkbj75GrpJwRBTgmxe8y53EJmqBJUeX005RwBC74X"
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <Cart buttonDisplay={buttonDisplay} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
