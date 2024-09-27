"use client";

import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


// Load Stripe outside of the component's render to avoid recreating the instance on every render

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const Checkout = () => 
{

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
};

export default Checkout;